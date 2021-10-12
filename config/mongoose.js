const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

const File = new Schema({
  author: String,
  date: Date,
  content: String,
});

module.exports = { 
  mongoose: mongoose,
  model: mongoose.model("file", File),
};