const mongoose = require('mongoose');
const { Schema } = mongoose;

// DB 인자에 DB 정보를 넣어야 함
mongoose.connect(DB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

const Schedule = new Schema({
  author: String,
  date: Date,
  content: String,
});

module.exports = { 
  mongoose: mongoose,
  model: mongoose.model("schedule", Schedule),
};