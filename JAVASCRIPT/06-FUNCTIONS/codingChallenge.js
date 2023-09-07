/* Code a function that returns the first value from its array parameter.

Examples:

firstValue([9, 7, 11]) returns 9.

firstValue([2, 22, 7]) returns 2. */

function firstValue(array) {
    return array[0];
}


/* Code a function that returns the result of converting the parameters hours 
and minutes to seconds.

Examples: toSeconds(2, 5) returns 7500. toSeconds(1, 0) returns 3600. */

function toSeconds(hours, minutes) {
  return (hours * 60 + minutes) * 60;
}

/* Code a function that returns true if the number parameter is less than or equal to 0. 
Otherwise, return false.

Examples: lessThanOrEqualToZero(7) returns false. lessThanOrEqualToZero(-5) returns true. */

function lessThanOrEqualToZero(number) {
    if (number <= 0) {
        return true;
    } else {
        return false;
    }
}