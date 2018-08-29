const express = require('express');
const router = express.Router();
const Author = require('../models/author');
const Book = require('../models/book');


//==============================
//    AUTHOR INDEX ROUTE
//==============================
router.get('/', async (req, res) => {
  try{
    const foundAuthor = await Author.find() 
      res.render('author/index.ejs', {
        author: foundAuthors
    });
  } catch (err){
    res.send(err);
  }
});



//==============================
//    NEW ROUTE
//==============================
router.get('/new', async (req, res) => {
  try{
    res.render('author/new.ejs')
  } catch (err){
    res.send(err)
  }
});



//==============================
//    AUTHOR SHOW PAGE
//==============================
router.get('/:id', async (req, res) => {
  try{
    const foundAuthor = Author.findById(req.params.id)
    res.render('author/show.ejs',{
      author: foundAuthor
    });
  } catch(err){
    res.send(err)
  }
});



//==============================
//    EDIT ROUTE
//==============================
router.get('/:id/edit', async (req, res) => {
  try{
    const foundAuthor = await Author.findById(req.params.id)
    res.render('author/edit.ejs', {
      author: foundAuthor
    });
  } catch(err){
    res.send(err);
  }
});



//==============================
//    UPDATE AUTHOR ROUTE
//==============================
router.put('/:id', async (req, res) => {
  try{
    const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, {new:true})
      res.redirect('/author') 
  }catch (err){
    res.send(err)
  }
});



//==============================
//    POST UPDATED AUTHOR
//==============================
router.post('/', async (req, res) => {
  try{
    console.log(req.body, '<------this is req.body')
    const createdAuthor = await Author.create(req.body)
    console.log(createdAuthor, '<------this is the createdAuthor');
    res.redirect('/author');
  } catch (err){
    res.send(err)
  }
});



//==============================
//    DELETE ROUTE
//==============================
router.delete('/:id', async (req, res) => {
  try{
    const deletedAuthor = Author.findByIdAndRemove(req.params.id) 
    console.log(deletedAuthor, '<------ this is deletedAuthor');
    res.redirect('/author')
  } catch (err){
    res.send(err);
  }
}) 




module.exports = router;