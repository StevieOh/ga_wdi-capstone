// const getBook = (id) => {
  $.ajax({
    url: "localhost:3000/googlebooks/book/" + id,
    method: "GET",
    dataType: "json",
    success: function(res) {
      // $("#city-name").empty();
      // $("#city-name").append($("<h1>").text(res.city));
      $("body").append($("<h1/>").text(res.volumeInfo.title))
    },
    fail: function(err) {
      console.log(err);
    }
  });
// }

// $(document).ready((event) => {
//   console.log(event);
//   getBook();
// });

