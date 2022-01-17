/**
 * Create an email pattern 
 */

let txt = "ismailjumarahib@gmail.com";

let pattern = /^[a-z0-9._]{6,18}@[a-z0-9-.]*.[a-z]{2,6}$/;

console.log(pattern.test(txt));
