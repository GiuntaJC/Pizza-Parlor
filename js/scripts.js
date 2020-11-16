// Back-end
function orderList() {
  this.pizzas = [];
  this.totalPrice = 0;
}


orderList.prototype.addPizza = function(pie) {
  this.pizzas.push(pie);
}

orderList.prototype.getTotalPrice = function() {
  this.pizzas.forEach((objIndex) => {
    this.totalPrice += objIndex.price;
  }); 
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
  if(gluten == true) {
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
  const toppingsPrice = [["pepperoni", .75], ["mushroom", .85], ["diced tomato", .50], ["sausage", 1], ["basil", .50], ["pineapple", .60], ["canadian bacon", .70]]; // addition
  output = 0;
  toppings.forEach(function (elem1) {
    toppingsPrice.forEach(function (elem2) {
      if(elem1 == elem2[0]) {
        output = output + elem2[1];
      }
    });
  });
  output = price + output;
  return output;
}

function pizza(size, crust, sauce, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
  this.price = 0;
}

pizza.prototype.getPizzaPrice = function() {
    this.price = getSizePrice(this.size);
    this.price = getCrustPrice(this.price, this.crust.crustSize, this.crust.isGlutenFree);
    this.price = getSaucePrice(this.price, this.sauce);
    this.price = getToppingsPrice(this.price, this.toppings);
    this.price = parseFloat(this.price.toFixed(2));
}

function crustType(crustSize, isGlutenFree) {
	this.crustSize = crustSize;
  this.isGlutenFree = isGlutenFree;
}

// Front-end
$(document).ready(function() {
  let order = new orderList();
  $("#orderForm").submit(function(event) {
    const inputSize = $('input[name="size"]:checked').val();
    const inputCrustSize = $('input[name="crustType"]:checked').val();
    const inputCrustGluten = document.getElementById("crustGluten").checked;
    const inputSauce = $('input[name="sauceType"]:checked').val();
    let inputToppings = []; 
    $("input:checkbox[name=toppings]:checked").each(function(){
      inputToppings.push($(this).val());
    });
    const inputCrust = new crustType(inputCrustSize, inputCrustGluten);
    const Pizza = new pizza(inputSize, inputCrust, inputSauce, inputToppings);
    
    Pizza.getPizzaPrice();
    order.addPizza(Pizza);

    $('input[name="size"]').prop('checked', false);
    $('input[name="crustType"]').prop('checked', false);
    $('#crustGluten').prop('checked', false);
    $('input[name="sauceType"]').prop('checked', false);
    $("input:checkbox[name=toppings]:checked").each(function(){
      $(this).prop('checked', false);
    });
    $("#wasAdded").show();

    event.preventDefault();
  });

  $("input#finishOrder").click(function() {
    order.getTotalPrice();
    $("#finalOutputPrice").append(order.totalPrice);
    $("#inputOrderForm").hide();
    $("#finalOutput").show();
  });
});