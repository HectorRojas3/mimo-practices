/* 
Project
Light Switch Program
Let's create a smart light switch that switches the lights off 
if it's daytime and on if it's nighttime. 
*/

/* Tasks
1. Let's start by creating a variable and setting its value to daytime. 
It's always daytime in some part of the world. 
    - Create an isDay variable.
    - Give it a value of true.
2. Since it's daytime and we want to save energy, the lights should be off.
    - Create a lightsOn variable and store false in it.
3. Time to display a prompt in the console.
    - Use console.log() to display "Daytime?" in the console.
4. Let's see what gets displayed after asking if it is daytime.
    - Display the first variable in the console.
5. Let's ask if the lights are on.
    - Display Lights on? in the console.
6. Now let's see if the lights are on.
    - Display the lightsOn variable in the console.
7. Now let's simulate what happens during the night.
    - Temporarily set the isDay to false.
8.  We also need to update lightsOn, of course. 
Let's put the negation operator to good use.
    - Set lightsOn to the opposite of the first variable. 
    Do this by setting the value of lightsOn to the value of isDay, 
    and then negating it.
*/

/* 
There we go! 
We've built an app that checks if it's daytime or nighttime 
and switches the lights on and off accordingly. 
Why not practice some more with boolean values?

Extra tasks
1. Use the negation operator 
to change the variables inside the display statements.
2. Try combining the display statements into only two statements 
in total.

Feel free to explore, there's no more testing
*/

//task 1
//const isDay = true;
//task 7
const isDay = true;
//task 2
const lightsOn = false;
//task 3
//console.log("Daytime?");
//task 4
//console.log(isDay);
//task 5 
//console.log("Lights on?");
//task 6 
//console.log(lightsOn);
//extra tasks
console.log("Daytime?" + " " + isDay);
console.log("Lights on?" + " " + lightsOn);