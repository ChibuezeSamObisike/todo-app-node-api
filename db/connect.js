const mongoose = require("mongoose");

const connectionString = "";

const connectDB = (url) => {
  //Setting the options because of the Deprecated version I am using so I am testing my new macbook commands, lol
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};

module.exports = connectDB;
