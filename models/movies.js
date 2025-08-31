const {DataTypes} = require("sequelize");
const db = require("../database/db");

const Movie = db.define("Movies", {
    filme:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    genero:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ano:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT
    }
});

module.exports = Movie;