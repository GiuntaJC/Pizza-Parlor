// Back-end
function pizza(crust, sauce, toppings, size) {
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
  this.size = size;
}

function crustType(crustSize, isGlutenFree) {
	this.crustSize = crustSize;
  this.isGlutenFree = isGlutenFree;
}

let pizzaToppings = []; // Move to local scope later

// Front-end
$(document).ready(function() {

});