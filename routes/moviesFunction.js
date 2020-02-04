/* eslint-disable */
const movies = require("../models/movie");
const logger = require("../middleware/winston.js");

// gets all movie
const getAllMovies = (request, response) => {
  movies
    .findAll()
    .then(movies => {
      response.status(200).json(movies);
    })
    .catch(err => {
      logger("No movies were found");
      logger(err.message);

      response.status(404).send("No movies were found");
    });
};

// get a single movie with rank
const getAMovie = (request, response) => {
  movies
    .findByPk(request.params.rank)
    .then(movie => {
      console.log(movie);
      response.status(200).json(movie);
    })
    .catch(err => {
      console.log(err.message);
      logger(`Movie is not present`);
    });
};

// delete a single movie
const deleteAMovie = (request, response) => {
  movies
    .destroy({
      where: {
        id: request.params.rank
      }
    })
    .then(movie => {
      if (movie) {
        response.status(200).send("Deletion successful");
        console.log(movie);
      } else {
        logger(`Movie not found with the given rank`);
        response.status(404).send(`Movie not found with the given rank`);
      }
    })
    .catch(err => {
      logger(`Movie not found with the given rank`);
      logger(err.message);
      response.status(404).send(`Movie not found with the given rank`);
    });
};

// add a new movie
const postAMovie = (request, response) => {
  console.log(request.body);
  let {
    Rank,
    Title,
    Description,
    Runtime,
    Genre,
    Rating,
    Metascore,
    Votes,
    Gross_Earning_in_Mil,
    Actor,
    Year,
    director_id
  } = request.body;
  movies
    .create({
      Rank,
      Title,
      Description,
      Runtime,
      Genre,
      Rating,
      Metascore,
      Votes,
      Gross_Earning_in_Mil,
      Actor,
      Year,
      director_id
    })
    .then(results => {
      console.log(results);
      response
        .status(200)
        .send(`Movie added with the id of ${results.dataValues.id}`);
    })
    .catch(error => {
      console.log(error.message);
      logger(error.message);
      logger("*********************************");
      logger(error);
      response.status(400).send(`Movie already present`);
    });
};

// update a already existing movie
const updateAMovie = (request, response) => {
  let rank = request.params.id;
  let updatedBody = request.body;
  console.log(updatedBody);
  movies
    .update(updatedBody, {
      where: {
        id: rank
      }
    })
    .then(results => {
      console.log(results);
      response.status(200).send(`Movie with the ${rank} updated successfully`);
    })
    .catch(err => {
      logger(`Movie with the ${rank} not found`);
      response.status(404).send(`Movie with the ${rank} not found`);
    });
};

module.exports = {
  getAllMovies,
  getAMovie,
  deleteAMovie,
  postAMovie,
  updateAMovie
};
