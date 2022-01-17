/**
 * Create a Bangladeshi phone number pattern
 */
let txt = "01998798545";

let  pattern = /^(\+8801|8801|01)[0-9]{9}$/; 

console.log(pattern.test(txt));