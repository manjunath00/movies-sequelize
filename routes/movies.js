/* eslint-disable */
const express = require("express");
const router = express.Router();
const {
  getAllMovies,
  getAMovie,
  deleteAMovie,
  postAMovie,
  updateAMovie
} = require('./moviesFunction');

// gets all data
router.get("/", getAllMovies);

// get a single movie with rank
router.get("/:rank", getAMovie);

// delete a single movie
router.delete("/:rank", deleteAMovie);

// add a new movie
router.post("/", postAMovie);

// update a already existing movie
router.put("/:id", updateAMovie);

module.exports = router;
