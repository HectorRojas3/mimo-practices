/* 
Project
Wishlist Items
Let's use our knowledge of for loops to add our wishlist items to our shopping cart 
and total up the price.
*/

/* 
We've already added a wishlist array that stores a user's wishlist, 
- a prices array that stores those items' prices, 
- a quantity array that stores the quantity of each wishlist item, 
- and an availableStock array that stores the available stock for those items.
The indices of each array map to a product.
Now, let's add a way to keep track of the total price of our items.
1. Create a variable named total and assign it 0.
2. To start creating our first for loop to go through our wishlist array.
    - Code a for loop with a counter variable i set to 0.
    - Assemble the condition so that it runs its code block 
    while i is less than the wishlist length.
    - Inside the parentheses, increment the counter variable by 1.
    - Inside the body of the for loop, display the counter variable 
    to test that the loop is working.
3. Now, let's display adding our wishlist items to the shopping cart. 
We want it to display something like. 1 Red T-shirt added to your shopping cart.
    - Inside the for loop, replace the contents of the console.log 
    by building a string to display something like <quantity> <wishlist item> 
    added to your shopping cart. Look at the hint if you'd like to see how this is done.
4. Let's calculate the total of our items using our for loop. We'll use addition assignment 
so that we don't have to keep creating a new total variable each time.
    - Inside the for loop body and under the console.log(), 
    multiply the current element of the prices array 
    with the current element of the quantity array. 
    Use addition assignment to add this to the total variable. 
    Look at the hint if you'd like help with this.
5. Let's display the total price after adding up all of the prices.
    - After the for loop, display our total. It should display like 
    Total Price: $<total>. Look at the hint if you'd like to see how this is done.
6. Next, let's start writing our second for loop to subtract the quantity of our wishlist items 
from the available stock.
    - Code a for loop with a counter variable i set to 0.
    - Assemble the condition so that it runs its code block while i 
    is less than the availableStock array length.
    - Inside the parentheses, increment the counter variable by 1.
    - Inside the body of the for loop, display the counter variable 
    to test that the loop is working properly.
7. Let's subtract the quantity of our wishlist items from the availableStock array.
    - Inside of the body of the second for loop and above the console.log, 
    use self assignment to subtract the current item in the quantity array 
    from the current item of the availableStock array. 
    Look at the hint if you'd like to see how this is done.
8. Now, let's display our updated available stock of each item in our loop.
    - Inside of the second for loop, replace the contents of the console.log by building a string 
    to display something like 
    There are <number> <item> left. 
    Look at the hint if you'd like to see how this is done.
*/

const wishlist = ["Red T-Shirt", "Blue Jeans", "Yellow Sweater"];
const prices = [9.99, 14.99, 12.99];
const quantity = [1, 2, 1];
let availableStock = [100, 121, 53];

// task 1 
let total = 0;

// task 2 
for (let i = 0; i < wishlist.length; i++) {
    //console.log(i);
    //task 3
    console.log(quantity[i] + " " + wishlist[i] + " added to your shopping cart");
    //task 4
    total += prices[i] * quantity[i]; 
}
//task 5
console.log("Total price: $" + total);

//task 6
for (let i = 0; i < availableStock.length; i++) {
    //task 7
    availableStock = quantity[i] -= quantity[i];
    //task 8
    console.log("There are " + availableStock[i] + " " + wishlist[i] + " left" );
}

/* 
Well done! 
You have successfully added your wishlist items to your cart, calculated the total, 
and updated the available stock using loops.

Feel free to play with the code. 
How about adding a new item to the wishlist array, 
its price to the prices array, and the number available in the availableStock array?
*/
