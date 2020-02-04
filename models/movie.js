/* eslint-disable */
const Sequelize = require("sequelize");
const database = require("../database/connection.js");

const Movie = database.define("movie", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Rank: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: false
  },
  Title: {
    allowNull: false,
    type: Sequelize.STRING
  },
  Description: {
    allowNull: false,
    type: Sequelize.STRING
  },
  Runtime: {
    allowNull: false,
    type: Sequelize.FLOAT
  },
  Genre: {
    allowNull: false,
    type: Sequelize.STRING
  },
  Rating: {
    allowNull: false,
    type: Sequelize.FLOAT
  },
  Metascore: {
    type: Sequelize.INTEGER(11),
    allowNull: false
  },
  Votes: {
    allowNull: false,
    type: Sequelize.BIGINT
  },
  Gross_Earning_in_Mil: {
    allowNull: false,
    type: Sequelize.FLOAT
  },
  Actor: {
    allowNull: false,
    type: Sequelize.STRING
  },
  Year: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  director_id: {
    allowNull: false,
    type: Sequelize.INTEGER
  }
});

Movie.associate = function(models) {
  movie.belongsTo(models.Director, {
    foreignKey: "directorId",
    as: "director_id"
  });
};

module.exports = Movie;

// Director.hasMany(Movie);
// Movie.belongsTo(Director);
