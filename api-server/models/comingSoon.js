const { DataTypes } = require("sequelize");
const db = require("../config/database");
const MovieDetail = require("./movieDetail");

const ComingSoon = db.define(
  "ComingSoon",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    movieTitle: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    movieId: {
      type: DataTypes.UUID,
      references: {
        model: MovieDetail,
        key: "id",
      },
    },
  },
  {
    tableName: "comingsoon",
    timestamps: false,
  }
);

module.exports = ComingSoon;
