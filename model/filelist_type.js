const Sequelize = require("sequelize");

module.exports = (sequelize, ModelHelper) => {
  class filelist_type extends Sequelize.Model {
    static associate({ filelist }) {
      this.Assocations = [
        {
          type: "hasMany",
          model: filelist,
          as: "filelist",
          foreignKey: "fileList_type_id",
        },
      ];
      ModelHelper.SetAssocations(this);
    }
  }
  filelist_type.init(
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING },
    },
    {
      sequelize,
      tableName: "filelist_type",
      modelName: "filelist_type",
      timestamps: false,
    }
  );
  return filelist_type;
};
