/* 
Project
Receipt Program
Let's use our knowledge of loops, arrays, and functions to process complex data 
and create a summary of customer receipts.
*/

/* 
In order to populate the summary table with data, 
we've added element IDs throughout the HTML. 
1. The table's header row will contain the customer names and should have id s of 
customer0 , customer1 , customer2 .
2. The table's first data row will contain the list of receipt items and should have id s of 
receipt0 , receipt1 , receipt2 .
3. The table's second data row will contain the receipt total and should have id s of 
total0 , total1 , total2 .
*/

/* Tasks
1. We'll work on parsing the data. Within the populateTable() function, we'll begin 
by writing a for loop to iterate through the customers array. Name the iterator variable i.
    - Write a for loop to iterate from 0 to the final index of the customers array.
    - Within the for loop body, console.log() the iterator variable i 
    to check that your loop is working.
2. At each iteration, have your code save the corresponding customers and receipts data 
to variables.
    - First, inside the new loop 
    remove the console.log() statement you added in the previous step.
    - Inside the loop create a variable customer 
    and set it to the value of the current element of customers using bracket notation.
    - Create a variable receipt 
    and set it to the value of the current element of receipts using bracket notation.
    - Finally, console.log() the customer variable, 
    and on the next line console.log() the receipt variable, 
    to check that you iterated through each array properly.
3. To process the receipt and pricing data. 
Within the for loop, below the customer and receipt variables, set up two more variables: 
one to store a string of receipt items and another to store the receipt total.
    - First, remove the console.log() statements that you added in the last step.
    - Create a variable receipt_list and assign it an empty string. 
    Make sure to use let and not const, as the value will be reassigned later.
    - Create a variable sum and assign it a value of 0. 
    Make sure this variable is a let variable as well.
    - Finally, log the receipt_list variable followed by the sum variable 
    to the console to make sure your loop is working correctly.
4. Let's now process the receipt data. Write a for loop 
to iterate through the receipt variable that you saved earlier. 
Name the iterator variable j.
    - First, remove the console.log() statements that you added in the last step.
    - After initializing the sum variable, write a for loop 
    to iterate from 0 to the final index of the receipt variable. 
    Remember to use j as the iterator variable.
    - Within the for loop body, console.log the iterator variable 
    to check that your loop is working.
5. Within the for loop you wrote to iterate through the receipt contents, 
save the item name and its price in variables at each iteration.
    - First, remove the console.log() statement that you added in the last step.
    - Create a variable item and save the corresponding receipt data 
    (using the for loop iterator variable).
    - Create a variable price and save the corresponding prices data 
    (using item as the index).
    - Finally, console.log() both variables ( item and price ) 
    to check that you iterate through each array properly. 
    Console log each in a separate statement.
6. Now that the data is broken down, build the list of receipt items. 
At each iteration of the second for loop, 
concatenate the item with the receipt_list variable and a new line character ( "\n" ).
    - First, remove the console.log() statements that you added in the last step.
    - Set receipt_list equal to receipt_list concatenated with the item 
    and a new line character ( "\n" ).
    - Finally, log the receipt_list variable to the console 
    to make sure your loop is working appropriately.
7. Next, add the item's price to the sum variable. Then, outside of the second for loop, 
console.log() the receipt_list and sum variables.
    - First, remove the console.log() statement that you added in the last step.
    - Set sum equal to sum plus the price.
    - Outside of the second for loop, console.log() the receipt_list variable followed by the sum variable. Use two `console.log statements for this.
*/

/* 
We can now populate the table. We'll do so with a function called setElementText 
which takes two parameters: id and text.
Let's first plan out the element targeting and the values to populate. 
1. First, remove the console.log() statements that you added in the last step.
2. Write console.log statements (after the second for loop, but still inside the first for loop) 
to log the targeted element id along with the data we want to populate. 
Take a look below at the code needed for doing that.
3. Complete this for the customer, receipt_list, and sum variables. 
In total, you should have 9 console.log messages once the loop completes.
console.log("customer" + i.toString(), customer);
console.log("receipt" + ...
console.log("total" + ...

Make sure to use the strings "customer", "receipt", and "total" for their respective console logs, shown above.

Finally, use the setElementText function to populate the customer name 
(from the customer variable), items (from the receipt_list variable) 
and the total (from the sum variable).
1. First, remove the console.log() statements that you added in the last step.
2. Populate the Customer row of the table using the setElementText() function.
3. Populate the Items row of the table using the setElementText() function.
4. Populate the total row of the table using the setElementText() function.
*/


const customers = ["John S.", "Emma M.", "Frank T."];
const receipts = [
    ["eggs", "white bread", "milk"],
    ["milk", "cheese", "butter", "pancake mix", "flour"],
    ["cereal", "whole wheat bread", "milk", "cheese", "eggs", "vanilla"],
];
const prices = {
    eggs: 3.5,
    "white bread": 4.5,
    milk: 5.99,
    cheese: 6.5,
    butter: 3.45,
    "pancake mix": 4.5,
    flour: 5.75,
    cereal: 4.5,
    "whole wheat bread": 6.5,
    vanilla: 8.75,
};

function setElementText(id, text) {
    document.getElementById(id).innerText = text;
}

// task 1
function populateTable() {  
    // Your code starts here
    for (let i = 0; i < customers.length; i++) {
        // task 2
        const customer = customers[i];
        const receipt = receipts[i];
        /*
        console.log(customer);
        console.log(receipt); 
        */
        // task 3
        let receipt_list = "";
        let sum = 0;
        /*
        console.log(receipt_list);
        console.log(sum); 
        */
        // task 4
        for (let j = 0; j < receipt.length; j++) {
            //task 5
            //console.log(j);
            let item = receipt[j];
            let price = prices[item];
            // task 6
            /* 
            console.log(item);
            console.log(price); 
            */
            receipt_list += item + "\n";
            // task 7
            //console.log(receipt_list);
            sum += price;
        }
    // task 8
    /* 
    console.log(receipt_list);
    console.log(sum); 
    */
    //task 9
    /* 
    console.log("customer" + i.toString(), customer);
    console.log("receipt" + i.toString(), receipt_list);
    console.log("total" + i.toString(), sum);
    */
    setElementText("customer" + i.toString(), customer);
    setElementText("receipt" + i.toString(), receipt_list);
    setElementText("total" + i.toString(), sum);
    }
}

/* 
Well done! 
With our changes, we processed a series of data objects using for loops 
and created a summary screen! 
Our program used loops to convert a complex data object 
to a table containing each customer's name, list of items, and receipt total in a table.

Take a moment to play around with the code. 
You can try changing the source data to include an order of your own! 
*/
