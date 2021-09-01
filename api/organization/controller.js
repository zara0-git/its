const asyncHandler = require("express-async-handler");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs");
const moment = require("moment");
const shortid = require("shortid");
const {
  organization,
  organization_type,
  organization_files,
  Op,
  sequelize,
} = require("../../model");

module.exports.list = asyncHandler(async (req, res) => {
  const { filter, page } = req.query;
  const where = {};

  if (filter && filter.organization_type_id) {
    where.organization_type_id = filter.organization_type_id;
  }

  const pager = { limit: 10, offset: 0 };
  if (page && page.number && page.size) {
    pager.limit = parseInt(page.size + "");
    pager.offset = parseInt(page.size + "") * (parseInt(page.number + "") - 1);
  }

  const counts = await organization.count({
    where: where,
    include: [
      {
        model: organization_type,
        as: "organization_type",
      },
    ],
  });

  var data = await organization.findAll({
    attributes: ["id", "content", "name"],
    where: where,
    include: [
      {
        model: organization_files,
        as: "images",
      },
      {
        attributes: ["name"],
        model: organization_type,
        as: "organization_type",
      },
    ],
    ...pager,
    order: [["id", "DESC"]],
  });

  res.status(200).send({
    success: true,
    data: { data, count: counts },
  });
});

module.exports.create = asyncHandler(async (req, res) => {
  const { content, name, organization_type_id, organization_files_id } =
    req.body;
  if (!name) {
    throw new Error("гарчиг хоосон");
  }

  const data = await organization.create({
    content,
    name,
    organization_type_id,
  });
  const upd = await organization_files.update(
    {
      organization_id: data.id,
    },
    { where: { id: { [Op.in]: organization_files_id } } }
  );
  res.status(200).send({
    success: true,
    data: data,
  });
});

module.exports.show = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const data = await organization.findByPk(id, {
    include: [
      {
        model: organization_files,
        as: "images",
      },
      {
        attributes: ["name"],
        model: organization_type,
        as: "organization_type",
      },
    ],
  });

  res.status(200).send({
    success: true,
    data: data,
  });
});

module.exports.update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { content, name, organization_type_id, news_file_id, deleteidss } =
    req.body;
  const updateData = {};

  if (content !== undefined) {
    updateData.content = content;
  }
  if (name !== undefined) {
    updateData.name = name;
  }

  if (organization_type_id !== undefined) {
    updateData.organization_type_id = organization_type_id;
  }

  const data = await organization.update(updateData, {
    where: {
      id,
    },
  });

  const upd = await organization_files.update(
    {
      organization_id: data.id,
    },
    { where: { id: { [Op.in]: organization_files_id } } }
  );
  const del = await organization_files.destroy({
    where: {
      organization_id: deleteidss,
    },
  });

  res.status(200).send({
    success: true,
    data: data,
  });
});

module.exports.destroy = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const upd = await organization_files.destroy({
    where: {
      organization_id: id,
    },
  });
  const data = await organization.destroy({
    where: {
      id,
    },
  });

  res.status(200).send({
    success: true,
    data: data,
  });
});

module.exports.getList = asyncHandler(async (req, res) => {
  const { filter, page } = req.query;
  const where = {};

  if (filter && filter.organization_type_id) {
    where.organization_type_id = filter.organization_type_id;
  }

  var data = await organization.findAll({
    attributes: ["id", "name"],
    where: where,
    include: [
      {
        model: organization_files,
        as: "images",
      },
    ],
    order: [["id", "DESC"]],
  });

  res.status(200).send({
    success: true,
    data,
  });
});
module.exports.uploadFile = asyncHandler(async (req, res) => {
  var form = new formidable.IncomingForm();
  form.maxFileSize = 3000 * 1024 * 1024;

  form.parse(req, async (err, Fields, Files) => {
    console.log({ Fields, Files });
    if (Files) {
      var ids;
      for (let i = 0; i < Object.keys(Files).length; i++) {
        const NewFile = Files["myFile" + i];
        const ext = NewFile.name.split(".")[NewFile.name.split(".").length - 1];
        const newName = shortid.generate();
        const uploadFolder =
          "C:\\Users\\ITS\\Documents\\GitHub\\BaseBackEndNode\\public\\images\\organization\\";

        fs.rename(
          NewFile.path,
          uploadFolder + newName + "." + ext,
          function (error) {
            if (error) throw error;
          }
        );
        const newFile = await organization_files.create({
          orgname: NewFile.name,
          name: newName,
          ext,
        });

        ids = newFile.id;
      }
      res.status(200).send({
        success: true,
        data: { ids },
      });
      // moment().format("YYMMDDHHmmss");
    }
  });
});
