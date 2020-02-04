/* eslint-disable */

const Sequelize = require('sequelize');
const database = require('../database/connection.js');

const Director = database.define('director', {
    directorId : {
        type: Sequelize.INTEGER(11),
        allowNull : false,
        primaryKey : true,
        autoIncrement: true
    },

    directorName : {
        type: Sequelize.STRING(100),
        allowNull : false,
        unique: true,
        validate : {
            notNull : {msg : 'Director name cannot be empty'}
        }
    }
});

Director.associate = function(models) {
    Director.hasMany(models.movies, {
        foreignKey : directorId
    })
}

module.exports = Director;
