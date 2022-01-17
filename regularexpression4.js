/**
 * Create a password pattern 
 */

let txt = "Ismail0jum@%ahib";

let pattern = /^[a-zA-Z0-9!@#$%^&*?]{6,16}$/;  

console.log(pattern.test(txt));
