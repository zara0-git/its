const asyncHandler = require("express-async-handler");

const {
  organization,
  organization_type,
  organization_files,
} = require("../../model");

const {
  filelist,
  filelist_type,

  Op,
  sequelize,
} = require("../../model");
module.exports.list = asyncHandler(async (req, res) => {
  const { filter, page } = req.query;
  const where = {};

  if (filter && filter.filelist_type_id) {
    where.fileList_type_id = filter.filelist_type_id;
  }

  const pager = { limit: 10, offset: 0 };
  if (page && page.number && page.size) {
    pager.limit = parseInt(page.size + "");
    pager.offset = parseInt(page.size + "") * (parseInt(page.number + "") - 1);
  }

  const counts = await filelist.count({
    where: where,
    include: [
      {
        model: filelist_type,
        as: "filelist_type",
      },
    ],
  });

  var data = await filelist.findAll({
    attributes: ["id", "name", "date", "description"],
    where: where,
    include: [
      {
        attributes: ["name"],
        model: filelist_type,
        as: "filelist_type",
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

// module.exports.create = asyncHandler(async (req, res) => {
//   const { content, name, organization_type_id } = req.body;
//   if (!name) {
//     throw new Error("гарчиг хоосон");
//   }

//   const data = await organization.create({
//     content,
//     name,
//     organization_type_id,
//   });

//   res.status(200).send({
//     success: true,
//     data: data,
//   });
// });

module.exports.show = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const data = await filelist.findByPk(id, {
    include: [
      {
        attributes: ["name"],
        model: filelist_type,
        as: "filelist_type",
      },
    ],
  });

  res.status(200).send({
    success: true,
    data: data,
  });
});

// module.exports.update = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   const { content, name, organization_type_id } = req.body;
//   const updateData = {};

//   if (content !== undefined) {
//     updateData.content = content;
//   }
//   if (name !== undefined) {
//     updateData.name = name;
//   }

//   if (organization_type_id !== undefined) {
//     updateData.organization_type_id = organization_type_id;
//   }

//   const data = await organization.update(updateData, {
//     where: {
//       id,
//     },
//   });

//   res.status(200).send({
//     success: true,
//     data: data,
//   });
// });

module.exports.destroy = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const data = await filelist.destroy({
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

  if (filter && filter.filelist_type_id) {
    where.fileList_type_id = filter.filelist_type_id;
  }

  const pager = { limit: 10, offset: 0 };
  if (page && page.number && page.size) {
    pager.limit = parseInt(page.size + "");
    pager.offset = parseInt(page.size + "") * (parseInt(page.number + "") - 1);
  }

  const counts = await filelist.count({
    where: where,
    include: [
      {
        model: filelist_type,
        as: "filelist_type",
      },
    ],
  });

  var data = await filelist.findAll({
    attributes: ["id", "name", "file_name", "ext", "date", "description"],
    where: where,
    ...pager,
    order: [["id", "DESC"]],
  });

  res.status(200).send({
    success: true,
    data: { data, counts },
  });
});
