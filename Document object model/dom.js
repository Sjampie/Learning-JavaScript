//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
  //creating a new paragraph
  var p = document.createElement("p");
  var node = document.createTextNode("Some new text");
  //adding the text to the paragraph
  p.appendChild(node);
  var div = document.getElementById("welcome-text");
  //adding the paragraph to the div
  div.appendChild(p);
  // div.removeChild(p) Removes child called p of parent div
};
