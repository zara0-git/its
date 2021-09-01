const Sequelize = require("sequelize");

module.exports = (sequelize, ModelHelper) => {
  class organization extends Sequelize.Model {
    static associate({ organization_type, organization_files }) {
      this.Assocations = [
        {
          type: "belongsTo",
          model: organization_type,
          as: "organization_type",
          foreignKey: "organization_type_id",
        },
        {
          type: "hasMany",
          model: organization_files,
          as: "images",
          foreignKey: "organization_id",
        },
      ];
      ModelHelper.SetAssocations(this);
    }
  }
  organization.init(
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING },
      content: { type: Sequelize.TEXT },

      organization_type_id: { type: Sequelize.INTEGER },
      // short_content: {
      //   type: Sequelize.VIRTUAL,
      //   get() {
      //     return this.content + "".substring(0, 10);
      //   },
      // },
    },
    {
      sequelize,
      tableName: "organization",
      modelName: "organization",
      timestamps: false,
    }
  );
  return organization;
};
