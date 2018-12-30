//Getting a single value of a function
function calcSurface(width, height) { //Using 2 parameters called width, height
  return width * height; //Multipicate width and height and return its value
}
var surface = calcSurface(2, 5);
console.log(surface);

//Getting multiple values out of a function
function getSize(width, height, depth) { //This will calculate the volume of an box using depth
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume]; //This variable use an array to hold 2 values
  return sizes;
}
var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];
console.log(areaOne, volumeOne);
