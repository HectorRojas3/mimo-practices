/* Before we start, take a look at the output 
the programmer was trying to achieve: */

/*  
//[*]
~
~~
~~~
~~~~
~~~~~
*/

/* Now let's look at the code they wrote and start fixing it. 
The while loop is using a counter variable. 
But does that exist in the code? */

/* Tasks
1.  Start by creating the counter variable used in the while loop 
and assign it 1.
2. The developer wanted to stop the loop when counter is greater than 5.
Let's fix that by updating the condition to counter <= 5.
3. The developer has to join the strings, but he is using -=.
Inside the while loop's code block, update the -= operator 
so that it adds the string to line. You'll notice that 
the waves still don't display.
Every time the loop runs, we have to display the line to show the waves.
4. Display the line variable each time the while loop runs its code block.
*/

/* With our program up-and-running, let's experiment more with the code. 
1. Change the number in the condition to run the code block 10 times.
2. Display something other than * and ~ in the console. 
Try using something fun, like emojis.
3.Create a reverse pyramid
*/


let counter = 1; //task 1
let line = "";
console.log("🛸");
while (counter <= 5) { //task 2
  line += "🙆‍♂️"; //task 3
  counter++;
  console.log(line); //task 4
}

let counter2 = 5;
let line2 = "";
console.log("🤷‍♀️");
while (counter2 > 0) {
  line2 += "🛸";
  counter2--;
  console.log(line2);
}
