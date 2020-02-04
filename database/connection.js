/* eslint-disable */
const Sequelize = require("sequelize");

const database = new Sequelize("sequelizeMovies", "root", null, {
  host: "localhost",
  dialect: "mysql",
  define : {
    timestamps :false
  }
});

module.exports = database;
