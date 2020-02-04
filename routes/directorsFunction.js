/* eslint-disable */
const directors = require("../models/director");
const logger = require('../middleware/winston.js')

// gets all directors
const getAlldirectors = (request, response) => {
  directors
    .findAll()
    .then(directors => {
      response.json(directors);
    })
    .catch(err => {
      logger('Movies not found')
      
      response.status(404).send(err);
    });
};

// res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    // res.header("Access-Control-Allow-Headers");

// get a single director with rank
const getADirector = (request, response) => {
  const id = request.params.directorId
  directors
    .findAll({
      where: {
        directorId: id
      }
    })
    .then(director => {
      console.log(director)
      if(!director.length) {
        logger(`Director with the id ${id}not found`)
        response.status(404).send(`Director with the id ${id}not found`)
      }else {
        response.status(200).json(director)
      }
    }).catch(error => {
      logger({ stacktrace : error})
      response.status(400).send(`Bad request`)
    })
};

// delete a single movie
const deleteADirector = (request, response) => {
  console.log(request)
  directors
    .destroy({
      where: {
        rank: request.params.directorId
      }
    })
    .then(director => {
      response.status(200).send("Deletion successful");
    })
    .catch(err => {
      // logger(`Director with the id ${request.params.directorId} not found`, err)
      logger({ stacktrace : err, message : `Director with the id ${request.params.directorId} not found`})
      response.status(404).send(`Director with the id ${request.params.directorId} not found`);
    });
};  

// add a new movie
const postADirector = (request, response) => {
  let { directorName } = request.body;
  directors
    .create({
      directorName: directorName
    })
    .then(results => {
      console.log(results);
      response
        .status(200)
        .send(
          `Director added with the directorId ${results.dataValues.directorId}`
        );
    })
    .catch(error => {
      logger({ stacktrace : error, message : `Director is already there`})
      // logger('Director is already there', error)
      response.status(400).send('Director is already there')

    });
};

// update a already existing movie
const updateADirector = (request, response) => {
  directors
    .update(request.body, {
        where: {
          directorId: request.params.directorId
        }
    })
    .then(results => {
      console.log(results)
      if(results[0]) {
        response.status(200).send('Director updated successfully')
      }else {
        console.log(results)
        logger('Director was not modified');
        response.status(304).send('Director was not modified')
      }})
    .catch(error => {
      console.log(error)
      logger(error)
      response.send(error)
    }); 
};

module.exports = {
  getAlldirectors,
  getADirector,
  deleteADirector,
  postADirector,
  updateADirector
};
