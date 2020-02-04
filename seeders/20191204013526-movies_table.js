"use strict";
const movies = require("../moviesDB.json");
// console.log(movies)
// let moviesObj = JSON.parse(movies)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("movies", movies, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("movies", null, {});
  }
};
