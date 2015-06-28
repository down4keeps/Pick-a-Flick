$(document).ready(function(){

$.getJSON( "http://127.0.0.1:5000/neohackerz", function( data ) {
  var movies = [];
  $.each( data, function( key, val ) {
    movies.push( "<li id='" + key + "'>" + val + "</li>" );
    console.log(val);
  });
 
  $( "<ul/>", {
    "class": "my-new-movie-list",
    html: movies.join( "" )
  }).appendTo( "body" );
});

});