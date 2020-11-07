// Back-end
function orderList() {
  this.pizzas = [];
  this.totalPrice = 0;
  this.itemId = 0;
}

orderList.prototype.assignId = function() {
  this.itemId +=1;
  return this.currentId;
}

orderList.prototype.addPizza = function(pie) {
  pie.itemId = this.assignId();
  this.pizzas.push(pie);
}

function getSizePrice(size) {
  if(size == "small") {
    return 8.50;
  } else if(size == "medium") {
    return 11.50;
  } else if(size == "large") {
    return 14.50;
  }
}

orderList.prototype.getPizzaPrice = function() {
  const crustSizePrice = [["thin", .80], ["regular", 1], ["Deep-Dish", 1.5]]; // multiplier
  const crustGlutenPrice = [[false, 1], [true, 1.3]]; // multiplier
  const saucePrice = [["tomato", .50], ["white garlic", .75], ["alfredo", .80]]; // addition
  const toppingsPrice = [["peperoni", .75], ["mushroom", .85], ["diced tomato", .50], ["sausage", 1], ["basil", .50], ["pineapple", .60], ["canadian bacon", .70]]; // addition

  this.pizzas.forEach(function(objIndex) {
    objIndex.price = getSizePrice(objIndex.size);
  }); 
}

function pizza(size, crust, sauce, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
  this.price = 0;
}

function crustType(crustSize, isGlutenFree) {
	this.crustSize = crustSize;
  this.isGlutenFree = isGlutenFree;
}

let pizzaToppings = []; // Move to local scope later if possible



// Front-end
$(document).ready(function() {

});