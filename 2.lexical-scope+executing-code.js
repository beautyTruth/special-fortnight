var novel = "Dune";

function otherBook() {
  var novel = "Moby Dick"; // though unused, this variable's value is declared and stored in memory (for possible use)
  console.log("Some Book");
}

function writeBook() {
  var writeNovel = "Why?";
  console.log(writeNovel);
}

otherBook();
writeBook();

// JAVASCRIPT IS A LEXICALLY SCOPED LANGUAGE
