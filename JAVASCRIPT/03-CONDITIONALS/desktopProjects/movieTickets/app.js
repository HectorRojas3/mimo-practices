/* First, examine the provided code here: 
there's a variable storing a member_number 
and a variable storing the guest's age.

The movie theater has special pricing for seniors (65+) 
and kids (10 and under), 
which we'll cover in the next few steps. */

let member_number;
let age = 27;

/* 1. Let's start by creating a let variable named price. 
Do not assign a value to the variable. */

// step1
let price;

/* Now, let's handle the senior pricing. 
The theater charges $5 for a "senior" ticket. */

/* 1. Write an if statement that checks whether 
the guest's age is greater than or equal to 65. 

2. Then, should the condition pass, 
the if statement's code block should set price equal to 5.*/

/* if (age >= 65) {
    price = 5;
} */

/* Next, let's work on the pricing for kids. 
Tickets for kids age 10 and under are $8. */

/* 1. First, change the age variable to the value 10.

2. Next, write an else-if statement that checks whether the guest's age is 10 or less.

3. Should the condition pass, the else-if statement should set the price equal to 8. */

/* if (age >= 65) {
    price = 5;
} else if (age <= 10) {
    price = 8;
} */

/* Finally, we need to include the default ticket pricing in our conditional logic. 
Non-discounted tickets are $10. */

/* 1. First, change the age variable to the value 27.
2. Then, write an else statement that sets price equal to 10 in its code block. */

if (age >= 65) {
    price = 5;
} else if (age <= 10) {
    price = 8;
} else {
    price = 10;
}

/* Great, now let's output our result so we can test our conditional logic. 
When finished, run your program to check the output price. */

/* Write a console.log statement that prints the text 
"Ticket Price: $" followed by the price. Use a string concatenation for this output. */

/* In addition to pricing tickets variably by age, 
the theater's loyalty program entitles members to a 20% discount. 
Let's figure out how to incorporate the additional 20% discount for members.

Let's first set up a variable to store whether the guest is a member or not. 
This variable declaration should come immediately after the conditional, 
but before the price console.log statement. 
Next, we'll write the conditional to apply the discount. */

/* Create a const variable named isMember that stores the boolean result 
of whether member_number is greater than 1. 
It will storetrue if member_number is greater than 1 and false otherwise. */

const isMember = (member_number > 0);

if (isMember) {
    price = price * 0.8;
    console.log("Welcome Back!");
}

console.log("Ticket price: $" + price);

/* When the guest is a member, we want to output a message 
confirming we have their membership information. 
This if statement should come after the isMember variable declaration 
but before the console.log statement. */

/* Write an if statement that displays "Welcome Back!" in the console when isMember is true. */

/* Finally, let's apply the membership discount to price. */

/* Modify your newly created if statement to apply a 20% discount to price when isMember is true. */

/* Now let's check a specific case. 
We want to make sure that our conditional does not apply the member discount to guests 
(non-members). */

/* 1. First, remove the value from the member_number variable declaration.
2. Then, run your code and check to make sure that the 20% discount is not applied. */

/* Nice work! You built a complex JavaScript program that uses conditional statements 
to output a movie ticket price and applies a membership discount! 
Now is your chance to experiment with the code. 
Try changing the input variable values and testing the result. 
Or, consider adding more features that affect the pricing. */