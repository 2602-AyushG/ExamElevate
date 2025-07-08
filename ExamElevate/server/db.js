const mongoose = require('mongoose');

// MongoDb Compass
const mongoURI = "mongodb://localhost:27017/examElevate";

// MongoDb_Atlas (commented out for local development)
// require('dotenv').config({path:__dirname+'/.env'});
const connectToMongo = async () => {
    mongoose.connect(mongoURI || process.env.MONGODB_ATLAS_LINK).then(() => {
        console.log("Connected to Mongo Successfully");
    }).catch((err) => {
        console.log("MongoDB connection error:", err.message);
        console.log("Make sure MongoDB is running locally or update the connection string");
    });
}
module.exports = connectToMongo;