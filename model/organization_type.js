const Sequelize = require("sequelize");

module.exports = (sequelize, ModelHelper) => {
  class organization_type extends Sequelize.Model {
    static associate({ organization }) {
      this.Assocations = [
        {
          type: "hasMany",
          model: organization,
          as: "organization",
          foreignKey: "organization_type_id",
        },
      ];
      ModelHelper.SetAssocations(this);
    }
  }
  organization_type.init(
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING },
    },
    {
      sequelize,
      tableName: "organization_type",
      modelName: "organization_type",
      timestamps: false,
    }
  );
  return organization_type;
};
