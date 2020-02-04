'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('movies', 
    { 'id': {
        type: Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
      },
      'Rank' : {
          type: Sequelize.INTEGER,
          allowNull : false,
          autoIncrement : false
      },
      'Title' : {
          allowNull : false,
          type: Sequelize.STRING
      },
      'Description' : {
          allowNull : false,
          type: Sequelize.STRING
      },
      'Runtime' : {
          allowNull : false,
          type: Sequelize.FLOAT
      },
      'Genre' : {
          allowNull : false,
          type: Sequelize.STRING
      },
      'Rating' : {
          allowNull : false,
          type: Sequelize.FLOAT
      },
      'Metascore': {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      'Votes' : {
          allowNull : false,
          type: Sequelize.BIGINT
      },
      'Gross_Earning_in_Mil' : {
          allowNull : false,
          type: Sequelize.FLOAT
      },
      'Actor' : {
          allowNull : false,
          type: Sequelize.STRING
      },
      'Year' : {
          allowNull : false,
          type: Sequelize.INTEGER
      },
      'director_id' : {
        type: Sequelize.INTEGER(11),
          allowNull : false,  
          references: {
            model : 'directors',
            key : "directorId"
      },
    }
})},

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movies')
  }
};


