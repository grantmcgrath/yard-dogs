// Hides the results and footer sections onload
window.onload = function() {
  document.getElementById("results").style.display = "none";
  document.getElementById("footer").style.display = "none";
};

// Shrinks the emptySection to a height of 0 to allow the search bar to rise
function search() {
  document.getElementById("emptySection").style.height = "0";
  document.getElementById("footer").style.display = "block";
};

//







// NOTE: The code below may or may not be used.

// Displays the results section when the Search button is selected
function seadrch() {
  var x = document.getElementById("results");
  if (x.style.display === "none") {
    x.style.display = "block";
  };
  //  else {
  //   x.style.display = "none";
  // }
};
