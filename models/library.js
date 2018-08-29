const mongoose = require('mongoose');
const Author = require('./author');
const Book = require('./book');

const librarySchema = new mongoose.Schema({
  author: [Author.schema],
  book: [Book.schema],
})




module.exports = mongoose.model('Library', librarySchema);