$(document).ready(function(){

$.getJSON( "http://127.0.0.1:5000/neohackerz", function( data ) {
  var movies = [];
  $.each( data, function( key, val ) {
    movies.push(
    	'<div class="col-md-4"> \
	  	<h2>' + val.show_title + '</h2> \
	  	<img src="' + val.poster + '" /> \
	  	<p>' + val.summary + '</p> \
		</div>'
	);

    console.log(val);
  });
 
  $( "<div>", {
    "class": "my-new-movie-list",
    html: movies.join( "" )
  }).appendTo( "body" );
});

});

// THIS WAS THE OG HTML
// <div class="col-md-4">
//   <h2>The Big Lebowski</h2>
//   <img src="http://resizing.flixster.com/NaZiEIaHdb-oJaJ70TTJnnjCyq4=/180x270/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/77/11177717_ori.jpg" />
//   <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
//   <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
// </div>