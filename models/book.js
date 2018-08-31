const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishDate: Number,
  ISBN: String,
  currentlyReading: Boolean,
  read: Boolean,
  description: String
})


module.exports = mongoose.model('Book', bookSchema);