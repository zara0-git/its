const asyncHandler = require("express-async-handler");

const myError = require("../../utils/myError");

const {
  organization,
  organization_type,

  Op,
  sequelize,
} = require("../../model");

module.exports.list = asyncHandler(async (req, res) => {
  const { filter } = req.query;
  const where = {};

  if (filter && filter.name) {
    where.name = { [Op.like]: `%${filter.name}%` };
  }

  if (filter && filter.id) {
    where.id = filter.id;
  }
  const data = await organization_type.findAll({
    where: where,
  });

  res.status(200).send({
    success: true,
    data: data,
  });
});

module.exports.create = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const data = await organization_type.create({ name });

  res.status(200).send({
    success: true,
    data: data,
  });
});

module.exports.show = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const data = await organization_type.findByPk(id, {
    // include: [
    //   {
    //     attributes: ["id", "title"],
    //     model: organization,
    //     as: "organization",
    //   },
    // ],
  });

  res.status(200).send({
    success: true,
    data: data,
  });
});

module.exports.update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const updateData = {};

  if (name !== undefined) {
    updateData.name = name;
  }

  const data = await organization_type.update(updateData, {
    where: {
      id,
    },
  });

  res.status(200).send({
    success: true,
    data: data,
  });
});

module.exports.destroy = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const data = await organization_type.destroy({
    where: {
      id,
    },
  });

  res.status(200).send({
    success: true,
    data: data,
  });
});
