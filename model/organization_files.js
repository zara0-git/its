const Sequelize = require("sequelize");

module.exports = (sequelize, ModelHelper) => {
  class organization_files extends Sequelize.Model {
    static associate({ organization }) {
      this.Assocations = [
        // {
        //   type: "hasMany",
        //   model: news,
        //   as: "news",
        //   foreignKey: "news_type_id",
        // },
      ];
      ModelHelper.SetAssocations(this);
    }
  }
  organization_files.init(
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING },
      orgname: { type: Sequelize.STRING },
      organization_id: { type: Sequelize.INTEGER },
      path: { type: Sequelize.STRING },
      ext: { type: Sequelize.STRING },
    },
    {
      sequelize,
      tableName: "organization_files",
      modelName: "organization_files",
      timestamps: false,
    }
  );
  return organization_files;
};
