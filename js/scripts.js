// Back-end
function orderList() {
  this.pizzas = [];
  this.itemId = 0;
}

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

let pizzaToppings = []; // Move to local scope later if possible



// Front-end
$(document).ready(function() {

});