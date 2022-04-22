const { DataTypes } = require("sequelize");
const db = require("../config/database");

const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    fullname: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
    },
    mobilephone: {
      type: DataTypes.STRING(20),
      unique: true,
    },
    password: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
  },
  {
    tableName: "user",
    timestamps: true,
  }
);


module.exports = User