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

function getCrustPrice(price, crustSize, gluten) {
  let output = 0;
  if(crustSize == "thin") {
    output = price * .80;
  } else if(crustSize == "regular") {
    output = price;
  } else if(crustSize == "deep-dish") {
    output = price * 1.5;
  }
  if(gluten = true) {
    output = output * 1.3;
  }
  return output;
}

function getSaucePrice(price, sauce) {
  let output = 0;
  if(sauce == "tomato") {
    output = price + .50;
  } else if(sauce == "white garlic") {
    output = price + .75;
  } else if(sauce == "alfredo") {
    output = price + .80;
  }
  return output;
}

function getToppingsPrice(price, toppings) {
  const toppingsPrice = [["peperoni", .75], ["mushroom", .85], ["diced tomato", .50], ["sausage", 1], ["basil", .50], ["pineapple", .60], ["canadian bacon", .70]]; // addition
  output = 0;
  toppings.forEach(elem1) {
    toppingsPrice.forEach(elem2) {
      if(elem1 == elem2[0]) {
        output = price + elem2[1];
      }
    }
  }
  return output;
}

orderList.prototype.getPizzaPrice = function() {
  this.pizzas.forEach(function(objIndex) {
    objIndex.price = getSizePrice(objIndex.size);
    objIndex.price = getCrustPrice(objIndex.price, objIndex.crust.crustSize, objIndex.crust.isGlutenFree);
    objIndex.price = getSaucePrice(objIndex.price, objIndex.sauce);
    objIndex.price = getToppingsPrice(objIndex.price, objIndex.toppings);
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

let pizzaToppings = ["mushroom", "basil", "sausage"]; // Move to local scope later if possible
let pizzaCrust = new crustType("thin", false);

let order = new orderList();
const pizza1 = new pizza("large", pizzaCrust, "alfredo", pizzaToppings);
order.addPizza(pizza1);

console.log(order.pizza1.crust);




// Front-end
$(document).ready(function() {

});