
'use strict';
const direc = require('../directors.json');
// const directorsObj = JSON.parse(src);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("directors", direc, {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete("directors", null, {})
  }
};


