const { DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  username: {
    require: true,
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },

  password: {
    require: true,
    allowNull: false,
    type: DataTypes.STRING,
  },
});

module.exports = User;
