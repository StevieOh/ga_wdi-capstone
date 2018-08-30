const express = require('express');

//set up the router
const router = express.Router();
const Book = require('../models/book');
const Author = require('../models/author');

//=====================
//THE INDEX ROUTE
//=====================
router.get("/", (req, res) => {
 Book.find({}, (err, allbooks) => {
    console.log(allbooks)
    if(err){
      res.send(err);
    }else{
      res.render("books/index.ejs", {
        book: allbooks
      });
    }
  });
});

//==========================
//CREATE NEW ROUTE
//==========================
router.post('/', (req, res) => {
 console.log(req.body, 'this is req.body, should be form info')
 
 if(req.body.currentlyReading === 'on'){
  req.body.currentlyReading = true;
 } else{
  req.body.currentlyReading = false;
 }
 if(req.body.read === 'on'){
  req.body.read = true;
 } else{
  req.body.read = false;
 }
 Book.create(req.body, (err, addedBook) => {
   if(err){
    console.log(err)
    res.send(err)
   }else{
    console.log(addedBook)
    res.redirect('/books')
   }
 });
});

//====================
//NEW ROUTE
//====================
router.get('/new', (req, res) => {
 res.render('books/new.ejs') 
});

router.get('/:id/edit', (req, res) => {
 Book.findById(req.params.id, (err, foundBook) => {
  res.render('edit.ejs', {
    book: foundBook,
    index: req.params.index
  })
 }) 
})

//=====================
//EDIT ROUTE
//=====================
router.get('/books/:index/edit', (req, res) => {
 console.log('hitting edit route')
 res.render('edit.ejs', {
  book: foundBook
 }) 
})
//=====================
//SHOW ROUTE
//=====================
router.get('/books/:index', (req, res) => {
 res.render('show.ejs', {
  book: Book[req.params.index]
 }) 
})
//=====================
//UPDATE ROUTE
//=====================
router.put('/:id', (req, res) => {
 console.log('hitting the put route')
 if(req.body.currentlyReading === 'on'){
  req.body.currentlyReading = true;
 } else{
  req.body.currentlyReading = false;
 }
 if (req.body.read === 'on') {
  req.body.read = true;
 }else{
  req.body.read = false;
 }
 Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedBook) => {
   if(err){
    res.send(err);
   }else{
    console.log(updatedBook, 'check your model')
    res.redirect('/books')
   }
 })
});
//====================
//DELETE ROUTE
//====================
router.delete('/:id', (req, res) => {
 Book.findByIdAndRemove(req.params.id, (err, removedBook) => {
   if(err){
    console.log(err, 'this is the error in the delete route');
    res.redirect('/books')
   }
 }) 
})

module.exports = router;