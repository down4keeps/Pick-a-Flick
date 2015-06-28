$(document).ready(function(){

$.getJSON( "http://127.0.0.1:5000/neohackerz", function( data ) {
  var movies = [];
  $.each( data, function( key, val ) {
    movies.push(
// HAD TO ADD '\' TO THE END FOR LINE BREAKS!
    	'<div class="col col-md-4"> \
	  	<h2 class="movie-title">' + val.title + '</h2> \
	  	<img src="' + val.posters.original.replace(/^.*?\/[\d]+x[\d]+\//,"http://") + '" /> \
      <h5 style="display: block;">Your Rating:</h5> \
      <fieldset class="score"> \
      <legend>Score:</legend> \
      <input type="radio" id="' + val.id + ' score-5" name="score-' + val.title + '" value="5"/> \
      <label title="5 stars" for="' + val.id + ' score-5">5 stars</label> \
      <input type="radio" id="' + val.id + ' score-4" name="score-' + val.title + '" value="4"/> \
      <label title="4 stars" for="' + val.id + ' score-4">4 stars</label> \
      <input type="radio" id="' + val.id + ' score-3" name="score-' + val.title + '" value="3"/> \
      <label title="3 stars" for="' + val.id + ' score-3">3 stars</label> \
      <input type="radio" id="' + val.id + ' score-2" name="score-' + val.title + '" value="2"/> \
      <label title="2 stars" for="' + val.id + ' score-2">2 stars</label> \
      <input type="radio" id="' + val.id + ' score-1" name="score-' + val.title + '" value="1"/> \
      <label title="1 stars" for="' + val.id + ' score-1">1 stars</label> \
      </fieldset> \
	  	<p class="synopsis">' + val.synopsis + '</p> \
      </div>'
	);
  }); // END EACH

    movies.push(
    '<div class="col-md-4"> \
    <h2>Add New...</h2> \
    <a href="#"><img src="img/filmstrip-add-512.png" style="max-width: 200px; margin: 20px auto;" /></a> \
    <p>Search and Add new movie suggestions to your group!</p> \
    </div>'
  );

  $('.row').append(movies.join(''));

//   $( "<div>", {
//     "class": "row",
//     html: movies.join( "" )
//   }).appendTo( ".row" );
});

});

// THIS WAS THE OG HTML
// <div class="col-md-4">
//   <h2>The Big Lebowski</h2>
//   <img src="http://resizing.flixster.com/NaZiEIaHdb-oJaJ70TTJnnjCyq4=/180x270/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/77/11177717_ori.jpg" />
//   <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
//   <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
// </div>
