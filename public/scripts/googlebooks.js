console.log('linked')

const getBook = (query) => {
  
  $.ajax({
    url: "localhost:3000/googlebooks/book/" + query,
    method: "GET",
    dataType: "json",
    success: function(res) {
      console.log(res);
      // $("body").append($("<h1/>").text(res.volumeInfo.title))

      // add search results w/ jq -- each result is form with data stored in hidden inputs
      // and add button that posts 
    },
    fail: function(err) {
      console.log(err);
    }
  });
}

$("#search").on('click', (query) => {
  // console.log("gettingbook")
  getBook();

  // when button is clicked run the search above 
  // pass in the term from the input on search.ejs

});

