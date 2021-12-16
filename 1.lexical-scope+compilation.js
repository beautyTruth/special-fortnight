// Example 1 -> shows the compilation (vice intepretation)

// var x = 10; // target ref
// console.log(x) // source ref

// const y;

// Exmaple 2 -> compilation/parsing

var novel = "Dune"; // Global Scope (GS)

function otherBook() {
  //GS the function itself is global scope
  var novel = "Moby Dick"; // Function Scope (FS)
  console.log("Some Book");
}

function writeBook() {
  //GS the function itself is global scope
  var writeNovel = "Why?"; // FS
  console.log(writeNovel);
}

otherBook();
writeBook();

// never stop exploring
