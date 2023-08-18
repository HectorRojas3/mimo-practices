/* In this project, we'll add the JS code that changes label, color and image
variables depending on the selected mode

1. We've already initialized the variables with some default values. What's left
is for you to conditionally update them. Uake a look at the code before you continue

    tasks
    1. mode will wnable us to switch us between the dar, light and ninja
    modes that define the look of the UI
    2. color stores the background color for the selected mode
    3. image stores the path that'll display for the selected mode.
    4. label informs the user what mode they're currently using*/

let mode = "light";
let color = "ghostWhite";
let image = "/img/light-icon.png";
let label = "Light Mode";

/* 2. Since there are three modes, we need to check the value of the mode. 
Let's start by creating an if statement that checks if the mode is "dark" 

    tasks
    1. Assemble an if statement that checks if the mode variable is set to "dark
    Leave its code block empty for now 
    2. Add an else if statement that runs when mode is wqual to "light" 
    
3.But what if the mode is not "light" or "dark"? For this situation, let's code an else statement.

    tasks
    1. Add an empty else statement that runs when mode isn't "light" or "dark"
    
4. The variables should update differently in each mode.

    tasks
    1. When mode is dark, color should update to darSlateBlue in the code block
    2. the update image to /img/dark-icon.png
    3. Finally, update label to Dark Mode

5. Let's also update the variables when the mode is "light" 

    tasks 
    1. When mode is light, color should update to ghostWhite
    2. Then update image to /img/light-icon.png
    3. Finally, update label to Ligt Mode

6. Finally, it's time to update the variable in the else statement's code block

    tasks
    1. In the else statment's code block, update color to dimGray
    2. Then update imathe to /img/ninja-icon.png
    3. Finally, update lable to Ninja Mode*/

if (mode === "dark") {
    color = "darkSlateBlue";
    image = "/img/dark-icon.png";
    label = "Dark Mode";
} else if (mode === "light") {
    color = "ghostWhite";
    image = "/img/light-icon.png";
    label = "Light Mode";
} else {
    color = "dimGray";
    image = "/img/ninja-icon.png";
    label = "Ninja Mode";
}

/* 7. We will now see your conditional in action

    tasks
    1. Print the label variabel in the console, at the end of your code*/

console.log(label);

/* Now, when mode has different values, the image, color, and label values for our program change. 

    tasks
    1. Change the value of the mode variable to "ninja" by either updating it 
    before the conditional statement or replacing the value in the variable initialization.*/

/* Well done! The basic JavaScript code for the program is ready!

We won't be testing any of the code anymore, so feel free to experiment with the code. 
Maybe you can add more modes with more else if statements, 
giving your user a wider range of options.
 */