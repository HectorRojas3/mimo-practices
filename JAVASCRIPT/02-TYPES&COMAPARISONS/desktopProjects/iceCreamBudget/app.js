/* 
Project
Ice Cream Budget
As a camp counselor, you enjoy treating your campers to ice cream 
after a hot week.

You need to budget accordingly though, 
so you'd like to write a program that helps you estimate the cost 
depending on the number of campers that week.
*/

/* Tasks
1. First, you're going to start with what you know 
and you'll store this information in variables. 
You know that the price for a single scoop is $2.50 
and the number of campers you'll be treating this week is 15.
    - Create a variable named price and assign it a value of 2.50.
    - Create a variable named campers and assign it a value of 15.
2. Let's now log our newly created variables 
to check that they store our intended values.
    - First, write a console.log statement 
    logging the price variable.
    - Then, write a console.log statement 
    logging the campers variable.
3. We're going to need to account for tax 
when we estimate the total later. 
County sales tax is 8%, let's create a variable to store that 
and log it to the console.
    - First, create a variable named taxRate 
    that stores the number .08.
    - Then, log the taxRate variable.
4. Finally, let's set up the variable for our 
absolute maximum budget for this week's ice cream excursion: $40.
    - Create a variable named budget and set its' value to 40.
5. We can now begin performing operations on our created variables. 
Let's start by calculating the subtotal, 
based on the number of campers and the price per cone. 
Don't worry about adding taxes, we'll add those later.
    - Create a variable named total and use price and campers 
    to calculate the pre-tax total.
    - Then, log the total variable to the console.
6. Let's now determine whether the total exceeds our $40 budget 
and store the boolean result in a variable.
    - Create a variable named totalExceedsBudget.
    - Then, use a comparison operator to determine whether 
    total is greater than budget and store the resulting 
    boolean value in this variable.
7. Let's display the budget result on-screen.
    - console.log the text "Total Exceeds Budget? " 
    followed by the boolean value stored in totalExceedsBudget.
8. Our pre-tax total is within our budget, 
but what if we account for the 8% tax?
    - Modify the total calculation to account for the 8% tax rate. 
    You should make use of the taxRate variable.
9. Finally, let's use a comparison operator to check 
that we incorporated the 8% tax and store this boolean result 
in a variable.
    - Create a variable named taxApplied 
    that stores the boolean value of whether 
    total is greater than price * campers.
    - Then, console.log the text "Tax Applied? " 
    followed by the boolean value stored in taxApplied.
*/

//task 1
let price = 2.50;
let campers = 15;
//task 3
const taxRate = 0.08;
//task 4
let budget = 40;
//task 5
//const total = price * campers;
//task 8
const total = price * campers * (1 + taxRate);
//task 6
const totalExceedsBudget = total > budget; 
//task 9
const taxApplied = total > (price * campers)
//task 2
console.log(price);
console.log(campers);
console.log(taxRate);
console.log(total);
//task 7
console.log("Total Exceeds Budget? " + totalExceedsBudget);
console.log("Tax Applied?" + " " + taxApplied);

/* 
Nice work! 
You wrote a JavaScript program that used a variety of types 
and comparison operators to determine whether you'll be in budget 
for this week's camper ice cream excursion! 

Now is your opportunity to tinker with the code. 
You can add additional variables or functionalities as you please! Try it out!
*/