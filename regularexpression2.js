/**
 * Create a  username pattern
 */

let txt = "Ismailjumarahib12";

let pattern = /^[a-zA-z0-9][a-zA-Z0-9_.-]{6,18}[a-zA-z0-9]$/;

console.log(pattern.test(txt));