/* eslint-disable */
const express = require("express");
const router = express.Router();
const {
    getAlldirectors,
    getADirector,
    deleteADirector,
    postADirector,
    updateADirector
} = require('./directorsFunction');

// gets all data
router.get("/", getAlldirectors);

// get a single movie with rank
router.get("/:directorId", getADirector);

// delete a single movie
router.delete("/:directorId", deleteADirector);

// add a new movie
router.post("/", postADirector);

// update a already existing movie
router.put("/:directorId", updateADirector);   

module.exports = router;