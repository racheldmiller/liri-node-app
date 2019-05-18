// REQUIRED DEPENDENCIES

var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api");

require("dotenv").config();

var keys = require("./keys.js");

// SPOTIFY KEYS
// var spotify = new Spotify(keys.spotify);

// // OMDB
// var axios = require("axios");

// needs to be able to take in these commands
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

// USER INPUT VARIABLES
var multipleWords = process.argv.slice(3);
var input = multipleWords.join(" ");
var command = process.argv[2];

function liriBot(command, input) {
  switch (command) {
    case "movie-this":
      movie(input);
      break;
    case "concert-this":
      console.log(multipleWords);
      console.log(input);
      performing(input);
      break;
    case "spotify-this-song":
      // music(input);
      break;
    case "do-what-it-says":
      //   random(input);
      break;
    default:
      console.log("command not recognized");
  }
}

// ------------------------- CONCERT-THIS ----------------------------

// will use Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

// name of venue
// venue location
// date of event (use moment to format this as "MM/DD/YYYY")

function performing(input) {
  var queryURL =
    "https://rest.bandsintown.com/artists/" +
    input +
    "/events?app_id=codingbootcamp";
  console.log(queryURL);
  axios.get(queryURL).then(function(response) {
    var json = response.data;
    console.log(
      "Name of Venue: " +
        json.venue.name +
        "\nVenue Location: " +
        json.venue.city +
        "\nDate of Event: " +
        json.venue.datetime
    );
  });
}

// ----------------------- SPOTIFY-THIS-SONG ---------------------------
// function music(input) {
//   spotify
//     .search({ type: "track", query: input, limit: 20 })
//     .then(function(response) {
//       console.log(response);
//     });
// }
// var songTitle = "";
// artist(s)
// song's name
// preview link of song from spotify
// album that the song is from

// DEFAULT: "The Sign" by Ace of Base.

// --------------------------- MOVIE-THIS ---------------------------

// QUESTION : HOW DO I KNOW IT'S THESE VALUES IN THE CONSOLE? I EITHER FOUND OLD EXAMPLES OR USED HW

function movie(input) {
  var queryURL = "http://www.omdbapi.com/?t=" + input + "&apikey=trilogy";
  console.log(queryURL);
  axios.get(queryURL).then(function(response) {
    var json = response.data;
    console.log(
      "Title of the movie: " +
        json.Title +
        "\nYear the movie came out: " +
        json.Year +
        "\nIMDB Rating of the movie: " +
        json.imdbRating +
        "\nRotten Tomatoes Rating of the movie: " +
        json.Ratings[2].Value +
        "\nCountry where the movie was produced: " +
        json.Country +
        "\nLanguage of the movie: " +
        json.Language +
        "\nPlot of the movie: " +
        json.Plot +
        "\nActors in the movie: " +
        json.Actors
    );
  });
}

// conditional statement if their criteria returns nothing

// DEFAULT: If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
// It's on Netflix!

// ------------------------ DO-WHAT-IT-SAYS --------------------------

liriBot(command, input);
