var movie = "Memento";

function otherMovie() {
  var movie = "American Psycho";

  function againMovie(movieName) {
    console.log(movie, movieName);
  }

  againMovie("Dances with Wolves");
}

otherMovie();
// againMovie("The Revenant"); // will throw an error because the againMovie() function is only executable within the scope in which it is declared. If it was declared outside of the otherMovie() function, it would run without throwing an error.

// be good to yourself
