'use strict'

const lastButton = document.getElementById("btn1");
const back = document.getElementById("back");
const ctr = document.getElementById("ctr");
const arrow = document.getElementById("arrow");
const clear = document.getElementById("clear");
const prog = document.getElementById("prog");

function displayComment() {
    if (ctr.style.display === "" || ctr.style.display === "none") {
        ctr.style.display = "block";
    } else {
        ctr.style.display = "none";  
    }
    if (back.style.display === "" || back.style.display === "none") {
        back.style.display = "block";
    } else {
        back.style.display = "none";  
    }
  }
  
function displayClear() {
    if (clear.style.display === "" || clear.style.display === "none") {
        clear.style.display = "block";
    } else {
        clear.style.display = "none"; 
    }
}

function colorChange() {
    if (prog.style.color !== "red") {
        prog.style.color = "red";
    } else {
        prog.style.color = "black"; 
    }
}

lastButton.addEventListener("click", displayComment);
back.addEventListener("click", displayComment);
arrow.addEventListener("click", displayClear);
prog.addEventListener("click", colorChange);
