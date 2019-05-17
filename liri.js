require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// needs to be able to take in these commands
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

// ------------------------- CONCERT-THIS ----------------------------

// will use Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

// name of venue
// venue location
// date of event (use moment to format this as "MM/DD/YYYY")

// ----------------------- SPOTIFY-THIS-SONG ---------------------------

// artist(s)
// song's name
// preview link of song from spotify
// album that the song is from

// DEFAULT: "The Sign" by Ace of Base.

// --------------------------- MOVIE-THIS ---------------------------

// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.

// DEFAULT: If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
// It's on Netflix!

// ------------------------ DO-WHAT-IT-SAYS --------------------------
