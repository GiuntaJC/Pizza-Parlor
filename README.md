# Pizza Parlor
## Week 4 Independent Project for Epicodus, 11.06.2020
## By Joseph C Giunta
# About This Project
This site was built for an independent Friday project at _Epicodus_. It uses objects and constructors to allow the user to order a pizza, and returns a cost

# Setup

1. Download or clone this repository
2. Find the "index.html" file, unzipping if it is within a .zip folder
3. Right click the html file and select properties
4. Copy the file path under location
5. Paste that file path into your web browser's address bar

# Technologies Used
* Git
* GitHub
* HTML
* CSS
* Bootstrap
* Javascript
* Jquery
* Visual Studio Code

# Specs
Test: getPizzaPrice should check the choices selected, and return a final price based on them.
Expect: getPizzaPrice(pizzaOrder).toEqual($12.99);

Test: orderList.prototype.assignId should assign a new id to every item in an order
Expect: item1.toEqual(1), item2.toEqual(2), item3.toEqual(3)

Test: getSizePrice should return a price based on the size of the pizza
Expect: pizza(small).toEqual(8.50); pizza(large).toEqual(14.50);

Test: getCrustPrize should multiply the price according to both the crust type and whether or not  it is gluten free, rounding to 2 decimals
Expect: pizza[small, thin, true].toEqual(8.84);

Test: getSaucePrice should add a fixed ammount to the price based on sauce type
Expect: pizza.sauce("white garlic").toEqual(pizza.price + .75)

Test: getToppingsPrice should add a fixed ammount to the price based on Toppings
Expect: pizza.toppings["mushroom", "basil", "sausage"].toEqual(pizza.price + 2.35)

Test: getTotalPrice should add all pizza prices together into a total order price
Expect: getTotalPrice.toEqual(price1 + price2 + price3);

# Legal

Copyright 2020 Joseph C Giunta

This software is licensed under the MIT license.