/* 
Project
Air Conditioning Program

Let's write some code that switches an office air conditioner off over the weekend. 
*/

/* Tasks
1. We'll use two variables to tell 
if the day is a weekday and if the AC should be on or off. 
This code will run on a weekday.
    - Start creating the first variable by coding const.
    - Give it the variable name isWeekday and give it the value true.
2. When it's a weekday, the air conditioning switch, airConditioning, should be set to true.
    - Create a variable called airConditioning and set its value to true.
3. Display the string "Weekday" and the isWeekday variable in the console.
    - Code a display statement.
    - Inside the parentheses code "Weekday" as a string.
    - Code another display statement.
    - Inside the parentheses code the isWeekday variable.
4. Now display Air conditioning and the value in the airConditioning variable in the console.
    - Code another display statement.
    - Inside the parentheses code Air conditioning as a string.
    - Code another display statement.
    - Inside the parentheses code the airConditioning variable.
5. It's no longer a weekday, so change the value of isWeekday to false.
    - Change the value of isWeekday to false.
6. If it's not a weekday, the air conditioner should be switched off.
    - Update airConditioning by negating its true value.
*/

/* 
There we have it! 
We've created some simple code that controls the operation of an air conditioner. 
Feel free to play around with your code, changing the variables to see what prints to the console. 
*/

/* Extra tasks
1. Negate the first variable.
2. Try adding another variable called highTemperature 
which turns the air conditioning to it's maximum power.
*/

//task 1 
/*const isWeekday = true;*/
//task 5
const isWeekday = !false;
//task 2
//let airConditioning = true;
//task 6
let airConditioning = !true;
// extra task 1
let highTemperature = true;
//task 3
console.log("Weekday");
console.log(isWeekday);
//task 4
console.log("Air conditioning");
console.log(airConditioning);
//extra task 2
console.log("Maximum Power");
console.log(highTemperature);

