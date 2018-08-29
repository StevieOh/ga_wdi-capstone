const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const ejsLint = require('ejs-lint');
const superagent = require('superagent');

require('./db/db')

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

// const libraryController = require('./controllers/libraryController');
const bookController = require('./controllers/bookController');
const authorController = require('./controllers/authorController');

//everything in the controller now stsrts with '/library'
// app.use('/', libraryController);
app.use('/books', bookController);
app.use('/author', authorController);

app.get('/', (req, res) => {
  res.render('index.ejs')                    
})



app.listen(3000, () => {
  console.log("i am listening on port 3000")
})


app.get("/googlebooks/search/:query", (req, res) => {
  const appid = "AIzaSyA4_x0zZZBmb4t2Ker20t_d5pdSJ7EtbBov";
  superagent
    .get("https://www.googleapis.com/books/v1/volumes?q" + query + "&key=" + appid)
    .end((err, data) => {
      res.json(JSON.parse(data.items));
    });
});


// {
//   "title": string,
//   "description": string,
// }



