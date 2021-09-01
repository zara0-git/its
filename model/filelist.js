const Sequelize = require("sequelize");

module.exports = (sequelize, ModelHelper) => {
  class filelist extends Sequelize.Model {
    static associate({ filelist_type }) {
      this.Assocations = [
        {
          type: "belongsTo",
          model: filelist_type,
          as: "filelist_type",
          foreignKey: "fileList_type_id",
        },
      ];
      ModelHelper.SetAssocations(this);
    }
  }
  filelist.init(
    {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING },
      description: { type: Sequelize.STRING },
      date: { type: Sequelize.DATE },
      create_date: { type: Sequelize.DATE },

      fileList_type_id: { type: Sequelize.INTEGER },
      ext: { type: Sequelize.STRING },
      file_name: { type: Sequelize.STRING },
      file_orgname: { type: Sequelize.STRING },

      path: { type: Sequelize.STRING },
      // short_content: {
      //   type: Sequelize.VIRTUAL,
      //   get() {
      //     return this.content + "".substring(0, 10);
      //   },
      // },
    },
    {
      sequelize,
      tableName: "filelist",
      modelName: "filelist",
      timestamps: false,
    }
  );
  return filelist;
};
