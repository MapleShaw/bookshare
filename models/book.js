var mongoose = require('mongoose');
var bookShare = require('../routes/book.js');
var Book = mongoose.model('Book',bookShare);

module.exports = Book;