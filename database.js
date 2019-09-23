// require bluebird for our sqlite promise object
const Promise = require('bluebird');
// require sqlite to be able to use CRUD-operations on our database
const sqlite = require('sqlite');

// Read the settings from settings.json
const dbconfig = require("./settings.json");

// Connection config
const connectionConfig = {
    file : dbconfig.sqlite.file,
};

// Create a database promise object by connecting to database 
// with the settings defined in connectionConfig and
// pass in our Promise object (bluebird)
const dbPromise = sqlite.open(connectionConfig.file, { Promise });

// Export functions so they're visible for other files.
// All functions must be marked as async to let our app
// know it uses promises for each call
module.exports = {
    getTodo : async (id) => {
        throw new Error('Not implemented!');
        // await database promise
        const db = await dbPromise;
        // Database query
        const query = "";
        // Call database with query, supply array with arguments for query
        // and return the promise
        return db.get(query, [id]);
    },
    getTodos : async () => {
        throw new Error('Not implemented!');
        // await database promise
        const db = await dbPromise;
        // Database query
        let query = "";
        // Call database with query, no arguments supplied since we don't need any at this point.
        // Maybe we will if we want to sort on something for instance.       
        return db.all(query);
    }
};