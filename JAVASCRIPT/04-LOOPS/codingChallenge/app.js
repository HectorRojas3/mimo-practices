/* Step 1 

Complete the while loop body such that each iteration increases count by 1 
and then use console.log() to display the current count.

Run the code to check your answer. 
When finished, your console should list the numbers 1 through 10. */

/* Tasks
1. First, make the while loop increment count by 1.
2. Then, make the loop console.log() the current count.*/

let count = 0;
while (count < 10) {
    count++;
    console.log(count);
}

/* Step 2 

Recreate the counter from the last challenge (count up from 1 through 10), 
but this time using a for loop. The loop structure is already provided. 
You must fill in the missing loop parameters.

Run the test to check your answer. When finished, your console 
should list the numbers 1 through 10. */

/* Tasks

1. First, complete the first for loop parameter: 
    initialization of the counter variable i. 
    This is the value the loop should start at.
2. Next, complete the second for loop parameter: 
    the loop condition. This is the condition under which the loop should stop.
3. Finally, implement the counter iteration 
    so that it increments the counter variable i by 1 at each step.
*/

for (let i = 1; i < 11; i++) {
    console.log(i);
}

/* Step 3 
Complete the loop condition and body such that each iteration 
displays in the console the current count 
and then decreases the current count by
*/

/* Tasks 
1. The loop should count down from 15.
Run the test to check your answer. 
When finished, your console should list the numbers 1 through 15 
in descending order. 
2. First, implement the loop's condition: 
the loop should run while the count is greater than 0.
3. Next, implement the loop's code body: 
it should first console.log the current count 
and then decrease the count by 1.
*/

let count3 = 15;
while (count3 > 0 ) {
    console.log(count3);
    count3--;
}