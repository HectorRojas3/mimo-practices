/* 
Project
Party raffle

It is Fana's birthday today. She plans to have a lucky name draw for guests attending the party! 
Let's help her by creating a program that picks a random name.
*/

/* 
Tasks
1. Let's start the name drawing by registering the people who came to the party! 
We will store the names in an array.
    - Create a const variable named participants and store an empty array in it, [].
2. These are the names of the people who are at the party, let's add their names to the array! 
"Ada", "Bruce", "Carlos", "Dahlia", "Eugene", "Fana" 
    - Add all the names to the participants array using an array method, 
    in the exact order listed above.
3. We want to check the participants to see if there are any names missing. 
There are a few ways to complete that task, but one simple way at this point is 
to print the participant name list.
    - In the console print "Participants: " and the participants array in one line.
4. We accidentally added Fana to the participants array. 
Let's remove her because she is the host, and the winner should be a guest!
    - Remove the last element of the participants array using an array method.
    - Print "Participants: " and the names from the participants array in the console 
    to confirm that Fana is removed from our list.
5. Oh no, we mistook Chavo for his twin brother Carlos! 
Change the third element of the array from "Carlos" to "Chavo".
    - Set the value of the third element of participants to "Chavo".
    - Print "Participants: " and the names from the participants array in the console to confirm that "Carlos" is changed to "Chavo".
6. It's almost time to spin the wheel and make the lucky name draw! One last time, 
let's check the participant pool and confirm the number of names in the participants array.
    - Display in the console the number of participants in the raffle. 
    Use "Number of participants in the raffle: " followed by the number of elements 
    in the participants array. Use a property of the participants variable to code this number.
7. Great! We have 5 participants. Before we select a winner, let's check the names 
to confirm we've got everybody's name right. Previously we printed the participant name list 
as a whole, now let's print the names one by one using a loop! 
We'll use a for loop to print all the names in the array line by line.
    - Create a for loop that loops through the array.
    - Print the element at the current index in the console.
8. Good work, now that we have confirmed the names, we need to find a random way to select a winner! 
Let's start by counting the number of characters in all participants' names. 
Use the let variable namesCharacters to store this value.
    - Assign the value 0 to the namesCharacters variable.
    - Inside the loop, add the length of each element in the participants array 
    to the counter variable. Each iteration of the loop should add the current length to the previous 
    counter total.
9. We've got the total number of characters from the names of the participants. 
Now, let's divide namesCharacters by the number of participants. 
We're going to use the remainder number from the division as the index of the participants array 
to tell us the lucky winner!
    - After the loop, create a const variable named luckyIndex.
    - Store the remainder of namesCharacters divided by the length of participants in luckyIndex.
    - Print "Congratulations " and the name of the winner in the console, using the participants and luckyIndex variables.

    */

//task 1
const participants = ["Ada", "Bruce", "Carlos", "Dahlia", "Eugene", "Fana"]; //task 2

//task 3
//console.log("Participants: " + participants);

//task 4
participants.pop();
console.log("Participants: " + participants);

//task 5
participants[2] = "Chavo";
console.log("Participants: " + participants);

//task 6 
console.log("Number of participants in the raffle: " + participants.length);

/* //task 7
for (let i = 0; i < participants.length; i++) {
    const result = participants[i];
    console.log(result);
} */

//task 8
let namesCharacters = 0;

for (let i = 0; i < participants.length; i++) {
    console.log(participants[i]);
    namesCharacters = namesCharacters + participants[i].length;
}

//task 9
const luckyIndex = namesCharacters % participants.length;
console.log("Congratulations " + participants[luckyIndex]);

/* 
Congratulations, you have completed the random name picker based on the number of characters 
in the participants' names! 
A fair lucky name draw is now possible, and Fana can successfully play a fun party game 
with her friends. 
There will be no testing for this lesson, so feel free to play around with the code. 
Try to add, remove or update elements in the array. 
Since the names and number of the guests will directly affect the winner, have fun exploring!
*/