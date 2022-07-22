const mongoose = require('mongoose');

const connectionString = '';

const connectDB = (url) => {
    //Setting the options because of the Deprecated version I am using
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
};

module.exports = connectDB;