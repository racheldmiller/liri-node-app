// REQUIRED DEPENDENCIES

var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var moment = require("moment");

require("dotenv").config();

var keys = require("./keys.js");

// SPOTIFY KEYS
var spotify = new Spotify(keys.spotify);

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
      music(input);
      break;
    case "do-what-it-says":
      //   random(input);
      break;
    default:
      console.log("command not recognized");
  }
}

// ------------------------- CONCERT-THIS ----------------------------

function performing(input) {
  var queryURL =
    "https://rest.bandsintown.com/artists/" +
    input +
    "/events?app_id=codingbootcamp";
  axios.get(queryURL).then(function(response) {
    var jsonData = response.data[0];
    console.log(response.data);
    console.log(jsonData);
    console.log(
      "Name of Venue: " +
        jsonData.venue.name +
        "\nVenue City: " +
        jsonData.venue.city +
        "\nVenue Country: " +
        jsonData.venue.country +
        "\nDate of Event: " +
        moment(jsonData.datetime).format("l")
    );
  });
}

// ----------------------- SPOTIFY-THIS-SONG ---------------------------
function music(input) {
  spotify.search({ type: "track", query: input }).then(function(response) {
    var jsonData = response.tracks.items[0];
    console.log(
      "Artist(s): " +
        jsonData.artists[0].name +
        "\nName of Song: " +
        jsonData.name +
        "\nPreview URL of Song: " +
        jsonData.preview_url +
        "\nAlbum: " +
        jsonData.album.name
    );
  });
}

// DEFAULT: "The Sign" by Ace of Base.
// need to include what'd happen if there's an error.

// --------------------------- MOVIE-THIS ---------------------------

function movie(input) {
  // if (input === undefined) {
  //   input = "Bloodsport";
  // }
  var queryURL = "http://www.omdbapi.com/?t=" + input + "&apikey=trilogy";
  console.log(queryURL);

  axios.get(queryURL).then(function(response) {
    var jsonData = response.data;
    console.log(
      "Title of the movie: " +
        jsonData.Title +
        "\nYear the movie came out: " +
        jsonData.Year +
        "\nIMDB Rating of the movie: " +
        jsonData.imdbRating +
        "\nRotten Tomatoes Rating of the movie: " +
        jsonData.Ratings[2].Value +
        "\nCountry where the movie was produced: " +
        jsonData.Country +
        "\nLanguage of the movie: " +
        jsonData.Language +
        "\nPlot of the movie: " +
        jsonData.Plot +
        "\nActors in the movie: " +
        jsonData.Actors
    );
  });
}

// conditional statement if their criteria returns nothing
// DEFAULT: If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
// It's on Netflix!

// ------------------------ DO-WHAT-IT-SAYS --------------------------

liriBot(command, input);
