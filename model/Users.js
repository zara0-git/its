const Sequelize = require("sequelize");

module.exports = (sequelize, ModelHelper) => {
  class Users extends Sequelize.Model {
    static associate() {
      this.Assocations = [];
      ModelHelper.SetAssocations(this);
    }
  }
  Users.init(
    {
      Id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      UserName: { type: Sequelize.STRING },
      FirstName: { type: Sequelize.STRING },
      LastName: { type: Sequelize.STRING },
      Password: { type: Sequelize.STRING },
      Email: { type: Sequelize.STRING },
    },
    {
      sequelize,
      tableName: "Users",
      modelName: "Users",
      timestamps: false,
    }
  );
  return Users;
};
