/* 
Tasks
    1. We will start by creating a function that converts pounds to ounces.
        First, create an empty function called poundsToOunces 
        and give it a parameter named pounds.
    2. To convert pounds to ounces, we multiply the pounds value by 16.
        Within your newly created function, 
        create a constant called conversion that holds the value 16 and return it.
    3. Now, let's multiply pounds and conversion.
        reate a new constant called output, 
        and inside it store the result of multiplying pounds and conversion and then return it.
    4. The function now just needs to return the output in the specified format.
        Add a return statement and return output + " Ounces".
    5. To use our function and convert a number of pounds to ounces, 
    we need to call the function.
        Create a new constant named result 
        and set it to the result of calling poundsToOunces().
        Add the value 6 within the parenthesis of our function to convert 6 pounds to ounces.
    6. Let's see how the conversion worked out,
        Display the result constant in the console.

*/

//task 1
function poundsToOunces(pounds) {
    //task 2
    const conversion = 16;
    //return conversion;
    //task 3
    const output = pounds * conversion;
    //return output;
    //task 4
    return output + "Ounces"
}

    //task 5
    const result = poundsToOunces(6);
    //task 6
    console.log(result);

/* 
And there you have it! A pounds to ounces conversion function.
Take a moment to play around with the code. Don't worry, 
there are no tests on this final step so feel free to experiment. 
Try playing around with different values or creating a totally new converter. 
*/