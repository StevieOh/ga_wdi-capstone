const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const ejsLint = require('ejs-lint');
const superagent = require('superagent');

require('./db/db')

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.use(express.static('public'));

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

// const libraryController = require('./controllers/libraryController');
const bookController = require('./controllers/bookController');
const authorController = require('./controllers/authorController');

//everything in the controller now stsrts with '/library'
// app.use('/', libraryController);
app.use('/books', bookController);
app.use('/authors', authorController);

app.get('/', (req, res) => {
  res.render('index.ejs')                    
})



app.listen(3000, () => {
  console.log("i am listening on port 3000")
})

app.get("/googlebooks/search/:query", (req, res) => {
  const appid = "AIzaSyA4_x0zZZBmb4t2Ker20t_d5pdSJ7EtbBo";
  superagent
    .get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.query + "&key=" + appid)
    .end((err, data) => {
      console.log(data)
      res.json(data.body);
    });
});

app.get("/googlebooks/book/:id", (req, res) => {
  const appid = "AIzaSyA4_x0zZZBmb4t2Ker20t_d5pdSJ7EtbBo";
  superagent
    .get("https://www.googleapis.com/books/v1/volumes/" + req.params.id + "?&key=" + appid)
    .end((err, data) => {
      console.log(data)
      res.json(JSON.parse(data.text));
    });
});
// localhost:3000/googlebooks/search/:query

// {
//   "title": string,
//   "description": string,
// }



