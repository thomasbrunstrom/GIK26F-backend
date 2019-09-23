// Entry point for our application
// To run the application type
// npm run start in the terminal

// require express
const express = require('express');

// require cors (Cross-Origin Resource Sharing)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
const cors = require('cors');

// require our routes for routes-api 
const service = require('./routes-api');

// require our settings
const settings = require("./settings.json");

// create our app with express()
const app = express();

// define the port we're using from the settings-file
// if we're not in a "real" environment.
const port = process.env.PORT || settings.host.port;

// tell express to use cors
app.use(cors());

// tell express to parse json-formatted post-data.
app.use(express.json());

// tell express to use a directory named dist for static files. (Laboration 3)
app.use('/', express.static('dist'));

// tell express to use the routes defined in routes-api for every request to 
// [hostname]:[port]/api/
app.use('/api/', service);

// start our app by listening to port and log a message that were running on the port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));