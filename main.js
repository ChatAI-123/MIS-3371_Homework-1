/*
Name: 
Date created: 
Date last edited: 
Version: 
Description: Homework 1 JS 
Credits: The skeleton of this JS code is from MISSO. No public link to cite.
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
};