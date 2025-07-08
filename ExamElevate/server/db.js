const mongoose = require('mongoose');

// MongoDb Compass
// const mongoURI = "mongodb://localhost:27107/book";

// MongoDb_Atlas
require('dotenv').config({path:__dirname+'/.env'});
const connectToMongo = async () => {
    mongoose.connect(process.env.MONGODB_ATLAS_LINK).then(() => {
        console.log("Connected to Mongo Successfuly");
    }).catch((err) => console.log(err));
}
module.exports = connectToMongo;