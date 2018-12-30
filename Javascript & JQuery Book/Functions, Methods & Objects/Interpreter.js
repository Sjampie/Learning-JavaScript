//NORMAL FUNCTION DECLARATION
var size = oneArea(3, 4);
console.log(size);
function oneArea(width, height) {
    return width * height;
}
//Function can run BEFORE the function is declared
//ANONYMOUS FUNCTION/ FUNCTION EXPRESSION
var area = function(width, height) {
  return width * height;
};
var secSize = area(5, 4)
console.log(secSize);
//The interperter can only run the function AFTER its declared.

//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
var a = 2;

(function() { //This function can only be used once and will run immediately
  var a = 3;
  console.log(a); // will print out 3
})(); // () makes sure it runs immediately

console.log(a); //will print out 2

//all of this would be different if the code is compiled cause the code will compiled line by line.

var iffe = (function() {
  var width = 4;
  var height = 2;
  return width * height;
}());

console.log(iffe)
