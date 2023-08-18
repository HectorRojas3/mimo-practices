/* Project
Display Comments
Let's use our knowledge of for loops to display a list 
of comments in the console. */

/* Tasks
1.  Let's set the number of comments.
Create a constant named comments and assign it 3
2. Next, let's assemble the for loop that will display the comments.
    - Code a for loop with a counter variable i set to 0.
    - Assemble the condition so that it runs its code block 
    while i is less than comments.
    - Inside the parentheses, increment the counter variable by 1.
    - Inside the for loop, log the counter variable to the console.
3. We need to display the comments as well.
From inside the loop body, display Comment:  
and the counter variable in the console
4. Great work! 
Now, let's experiment with our code a little bit. What if i starts with 1?
    = Change the for loop values in such a way that if i starts with 1, 
    the loop gives the same result.
*/

/* But what if we need to print more comments?
    Change the code in such a way that the output is printed 10 times.
*/

/* What if we want to print only the comments on odd numbers?
    Make changes to the loop in such a way 
    that only the odd numbered comments are displayed.
*/




//const comments = 3;   // task 1
const comments = 10;    // task 1.2

//for (let i = 0; i < comments; i++) {  // task 2
//for (let i = 1; i <= comments; i++) {   // task 2.1
for (let i = 1; i <= comments; i += 2) {    // task 2.2
    //console.log(i);              
    //console.log("Comment: " + i);   // task 3
    console.log("Comment: " + i + " is odd"); //task 3.2
}
