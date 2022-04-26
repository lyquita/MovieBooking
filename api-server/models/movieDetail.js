const { DataTypes } = require('sequelize');
const db = require('../config/database');


const MovieDetail = db.define("movieDetail", {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    poster:{
        type: DataTypes.STRING(100),
    },
    thumbnail: {
        type: DataTypes.STRING(100)
    },
    movieTitle: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(500)
    },
    duration: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
    genres: {
        type: DataTypes.STRING(50)
    },
    director: {
        type: DataTypes.STRING(50)
    }
},{
    tableName: "movieDetail",
    timestamps: false
})

module.exports = MovieDetail;