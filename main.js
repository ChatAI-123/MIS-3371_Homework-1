/*
Program Name: main.js
Name: Andres Cortes
Date Created: 02/05/2025
Date Last Edited: 02/09/2025
Version: 1.1
Description: Homework 1 JS
Credits: The skeleton of this JS code is from MISSO. No public link to cite.
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider js code
let slider = document.getElementById("visitSatisfactionRating");
let output = document.getElementById("rating-slider");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
};