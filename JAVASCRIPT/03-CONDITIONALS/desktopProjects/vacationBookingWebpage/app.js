/* We already have all the HTML and CSS code we'll need, so we'll focus on the JavaScript. 
To make the JavaScript file interact with the HTML, we've also added some more advanced code 
at the bottom, starting with the line that contains const listItemArray. 
We'll learn more about that later.

The last two lines are commented out because they contain constants 
that have not yet been declared but you will address this in the next lesson.

We already have constants that hold information about the current listing. 
Let's define constants that hold information about our rental preferences. 
Make sure to code the constants before the const listItemArray. 

    tasks
    1. Code the const named minBeds and set the value to the number 5.
    2. Code the const named minReviewScore and set the value to the number 3.5.
    3. Code the const named maxCostPerNight and set the value to the number 150.*/

/* 2. Let's add the rest of the constants we need.

    tasks
    1. Code a const named needPool, and assign to it a boolean value of true.
    2. Code a const named inCountry, and assign to it a string value of "Italy".
    3. Uncomment the last two lines of the code.*/

/* 3. Next, we'll want to be able to keep track if any of the preferences set aren't met. 
To do that, we'll create a variable called match and set it to true. 
We'll set it to false later in the code if a listing doesn't match our requirements. 

    tasks
    1. Use let to create variable named match, and assign to it the boolean value true.*/

/* 4. Let's check if the listing has the number of beds we need.

    tasks
    1. Code an if statement which will update match to false if beds is less than minBeds.*/

/* 5. Let's check if the listing meets our standards for a minimum review score

    tasks
    1. Code another if statement which will update match to false 
    if reviewScore is less than minReviewScore.*/

/* 6. Next up, we'll want to check for a more tricky requirement. 
If we do need a pool and there isn't a pool available, we want to set the match as false. 
To do that, we can check for two boolean variables at once by using the && operator which means AND. 
This will check if both conditions are true at the same time. 

    tasks
    1. Code an if statement which will update match 
    to false if the condition needPool && !pool triggers the code block.*/

/* Let's check if the listing is in the country we want.

    tasks
    1. Code an if statement which will update match to false 
    if inCountry is not equal to country.*/

/* Let's check if the cost per night meets our requirements.

    tasks
    1. Code an if statement which will update match to false 
    if costPerNight is greater than maxCostPerNight.*/

/* 9. In the case that the cost per night 
is lower than our maximum cost per night, we'll want to display the difference as a saving. 

    tasks
    1. Under the match variable, use let to create a variable named saving. 
    Do not assign it a value.
    2. After the if statement closing curly brace, add an else statement along with curly braces.
    3. Inside the curly braces update saving to the mathematical operation 
    maxCostPerNight - costPerNight.*/

/* 10. Let's check if we have a match.

    taks
    1. Under the saving variable, use let to create a variable named message. 
    Do not assign it a value
    2. Code an if statement that checks if match is true. 
    Do so without using an operator inside the condition.
    3. Inside the curly braces, update the message variable to the string 
    "This property is a match!".*/

/* 11. Let's make our last if statement a bit more advanced. 
We'll make the code update the value for message if saving has a non-zero value. 

    tasks
    1. Within the if statement that we've just coded, 
    add a nested if statement underneath the update of the message variable.
    2. Inside the parentheses of the nested if statement, 
    code saving to check if the current options result in savings. 
    This executes the code block of the if statement if the value of saving is greater than 0, 
    because 0 and negative numbers evaluate to false.
    3. Inside the code block of the nested if statement, copy and paste the following code
        message = message + " It is $" + saving + " cheaper than your maximum.";
    4. Update costPerNight to the value 140.*/

/* 12. Finally, let's use a conditional to actually update the webpage. 
We'll do that by adding an if and else statement that writes on the page as needed. 

    tasks
    1. Code another if statement that evaluates if match is true. 
    Do not use an operator inside the condition. This time, 
    copy and paste the following code between the curly braces:
        document.getElementById('message').innerText = message;
    2. Add an else statement and inside the curly braces copy and paste the following code:
        document.getElementById('message').innerText = "Sorry, this property is not suitable.";*/
const beds = 6;
const reviewScore = 4.78;
//step 11b
const costPerNight = 140;
const pool = true;
const country = "Italy";
// step 1
const minBeds = 5;
const minReviewScore = 3.5;
const maxCostPerNight = 150;
// step 2
const needPool = true;
const inCountry = "Italy";
// step 3 and 9a
let match = true;
let saving;
// step 10a
let message;
// step 4
if (beds < minBeds) {
    match = false;
}
// step 5
if (reviewScore < minReviewScore) {
    match = false;
}
// step 6
if (needPool && !pool) {
    match = false;
}
// step 7
if (inCountry !== country) {
    match = false;
}
// step 8 and 9b
if (costPerNight > maxCostPerNight) {
    match = false;
} else {
    saving = maxCostPerNight - costPerNight;
}
// step 10b
if (match) {
    message = "This property is a match!";
    if (saving) { //step 11a
    message = message + " It is $" + saving + " cheaper than your maximum.";
    }
} 
// step 12
if (match) {
    document.getElementById('message').innerText = message;
} else {
    document.getElementById('message').innerText = "Sorry, this property is not suitable.";
}
const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Beds: " + beds;
listItemArray[1].innerHTML = "Review Score: " + reviewScore;
listItemArray[2].innerHTML = "Cost: " + costPerNight;
listItemArray[3].innerHTML = "Pool: " + ((pool) ? "Yes" : "No");
listItemArray[4].innerHTML = "Location: " + country;
listItemArray[5].innerHTML = "Minimum beds: " + minBeds;
listItemArray[6].innerHTML = "Minimum Review Score: " + minReviewScore;
listItemArray[7].innerHTML = "Maximum Cost: " + maxCostPerNight;
listItemArray[8].innerHTML = "Must Have Pool: " + ((needPool) ? "Yes" : "No");
listItemArray[9].innerHTML = "Location: " + inCountry;

/* Here's the completed code that checks the listing against our holiday requirements. 
Well done!

Feel free to play around with the variables any way you want to check for different outputs! 
Optionally, try using console.log() inside the if statements 
to display the results of the comparisons or all the variable values at the end. Have fun! */