'use strict'

const arrow = document.getElementById("arrow");
const study = document.getElementById("comment");

function displayComment() {
  if (study.style.display === "" || study.style.display === "none") {
    study.style.display = "inline";
  } else {
      study.style.display = "none";  
  }
}

arrow.addEventListener("click", displayComment);
