const { DataTypes } = require("sequelize");
const db = require("../config/database");
const MovieDetail = require("./movieDetail");

const NowShowing = db.define(
  "NowShowing",
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
    description: {
      type: DataTypes.STRING(500),
    },
    duration: {
      type: DataTypes.STRING(5),
    },
    genres: {
      type: DataTypes.STRING(50),
    },
    director: {
      type: DataTypes.STRING(50),
    },
  },
  {
    tableName: "nowshowing",
    timestamps: false,
  }
);

module.exports = NowShowing;
