const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/restaurant%20management%20system'

const callback = () => {
    console.log("connceted");
}

const connectToMongo = () => {
    mongoose.connect(mongoURI,callback())
}

module.exports = connectToMongo;