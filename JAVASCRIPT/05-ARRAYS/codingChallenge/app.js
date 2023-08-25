/* 
Code an array that contains the names of places to visit 
in this order: "New York", "Tokyo", "Hawaii". 

Assign this array to the places variable. 
Then, without causing any change to the original array, 
access the last entry in the array 
and assign this syntax to the retirement variable.

Output: You should visit Hawaii. 
*/

const places = ["New York", "Tokyo", "Hawaii"];
const retirement = places[2];
console.log("You should visit " + retirement + ".");

/* 
Let's create an array that holds a collection of siblings. 

Tasks
1. Code an array that contains the names of siblings 
in this order: "Jon", "Jess", "Jen", "Jarod" 
and assign it to the siblings variable.
2. Use the push() method to add a new child "Jacob" 
and assign this syntax to the add variable.
3. Access the middle child 
and save this syntax in the middleChild variable.

Output: The middle child is Jen.
*/

const siblings = ["Jon", "Jess", "Jen", "Jarod"];
const add = siblings.push("Jacob");
const middleChild = siblings[2];
console.log(`The middle child is ${middleChild}.`);

/* 
1. Code an array that contains a list of these to-do's: 
"study", "chores", and "meditate". 
Store the array in the todos variable.
2. Use pop to remove the final to-do from the array 
and store this in the remove variable.
3. Create a const variable leftToDo 
that stores the number of items left in the todos array. 
Use an array property to code this step.

Output: You have 2 items left to do.
*/

const todos = ["study","chores","meditate"];
const remove = todos.pop();
const leftToDo = todos.length;
console.log(`You have ${leftToDo} items left to do.`);