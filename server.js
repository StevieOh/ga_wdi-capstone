const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const ejsLint = require('ejs-lint');

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







// app.get("/openweather/current/:city", (req, res) => {
//   const appid = "a0780696d685b485af6974df3e8011b7";
//   const units = "imperial";
//   request
//     .get("http://api.openweathermap.org/data/2.5/weather?q=" + req.params.city + "&appid=" + appid + "&units=" + units)
//     .end((err, data) => {
//       res.json(JSON.parse(data.text));
//   });
// });
//   // Forecast Weather Data
// app.get("/openweather/forecast/:city", (req, res) => {
//   const appid = "a0780696d685b485af6974df3e8011b7";
//   const units = "imperial";
//   request
//     .get("http://api.openweathermap.org/data/2.5/forecast?q=" + req.params.city + "&appid=" + appid + "&units=" + units)
//     .end((err, data) => {
//       res.json(JSON.parse(data.text));
//   });
// });