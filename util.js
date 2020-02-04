/* eslint-disable */
const fs = require("fs");

const movies = require("./movies.json");
const directors = require("./directors.json");

// converts json to array
const getDirectorName = directors.map(obj => obj["directorName"]);
console.log(getDirectorName);

// gives id
const givesId = function(directorName) {
  return getDirectorName.indexOf(directorName) + 1;
};

// add a property to the given obj & deletes the said property
const addDirectorId = function(obj) {
  const dirName = obj["Director"];
  obj["director_id"] = givesId(dirName);
  delete obj["Director"];
  return obj;
};

// combines both the function
const makesFinalMovies = function(movies) {
  let finalArray = [];

  for (let movie of movies) {
    finalArray.push(addDirectorId(movie));
  }

  return JSON.stringify(finalArray);
  // return finalArray;
};

// write to the disk
const writeToDisk = function(val) {
  // makesFinalMovies(val)
  fs.writeFileSync("moviesDB.json", val, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("file is saved to disk");
    }
  });
};

// writeToDisk(makesFinalMovies(movies));

// const movies1 = require("./moviesDB.json");
// const src = require('./directors.json');

// console.log(movies1[8])
// console.log(src)

const updateTheObj = function(parent, child) {
  for(let item in child) {
    if(item) {
      if(typeof parent[item] === typeof child[item]) {
          parent[item] = child[item]
      }
    }
  }
  console.log(parent)
  return parent;
}

let parent = {
  "Rank": 50,
  "Title": "Casablanca",
  "Description": "A cynical nightclub owner protects an old flame and her husband from Nazis in Morocco.",
  "Runtime": 102,
  "Genre": "Drama",
  "Rating": 8.5,
  "Metascore": 100,
  "Votes": 441864,
  "Gross_Earning_in_Mil": 1.02,
  "Director": "Michael Curtiz",
  "Actor": "Humphrey Bogart",
  "Year": 1942
}

let child = {
  "Year" : "2025",
  "Votes" : 500000,

}

updateTheObj(parent, child)