const mongoose = require('mongoose');
const Book = require('./book');

const authorSchema = mongoose.Schema({
  name: {
    type: String, 
    required: true, 
    unique: true
  },
  books: [Book.schema]
})


module.exports = mongoose.model('Author', authorSchema);