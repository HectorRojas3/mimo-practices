/* 1. Firstly, we need to set the message and the first language.

    tasks
    1. Create a let variable named message and set it to "".
    2. Create a let variable named language and set it to English.*/

let message = "Thank You";
let language = "English";

/* 2. Let's start with English.

    tasks
    1. Create an if statement that sets the message to "Thank you" if the language is "English". 

3. It is always recommended to add a default message.

    tasks
    1. Change the value of language to "Japanese". 
    You can do this in the variable initialization, or in a separate statement before the conditional.
    2. To set a default message, add an else statement that sets message to "We don't support ", 
    and then join the language variable so that the displayed string will look like this:
    We don't support Japanese*/


if (language === "English") {
    console.log(message);
} else if (language === "Spanish") {
    message = "Gracias";
} else if (language === "German") {
    message = "Danke";
} else {
    message = "We don't support " + language;
}

/* 4. Let's see what your program is setting message to.

    tasks
    1. Display message in the console. */

console.log(message);

/* 5. Let's add support for Spanish.

    tasks 
    1. Change the value of language to "Spanish"
    2. Create an else if statement right under the if block, 
    that runs when the language equals "Spanish". Inside the code block, set message to "Gracias".*/

/* 6. Now, let's add support for German. The more, the merrier!

    tasks
    1. Change the value of language to "German".
    2. Add a second else if statement 
    that sets message to "Danke" when the language is "German".*/

/* 7. Now that we've coded the conditional, 
let's double-check to make sure everything is working correctly. 

    tasks
    1. Change the value of language to a language of your choice. 
    It can be a language the code supports, or that the code does not support. 
    Observe the result in the console. Do this as many times as you please.*/