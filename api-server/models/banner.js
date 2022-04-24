const { DataTypes } = require("sequelize");
const db = require("../config/database");


const Banner = db.define("Banner", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
    },
    poster:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    movieTitle: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(500),
    },
    duration: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
    genres: {
        type: DataTypes.STRING(50),
    }
},{
    tableName: "banner",
    timestameps: false
})

module.exports = Banner