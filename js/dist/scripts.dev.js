"use strict";

var checkpoint = window.innerHeight;
window.addEventListener("scroll", function () {
  var currentScroll = window.pageYOffset;

  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }

  document.querySelector(".landing").style.opacity = opacity;
});

function navToggle() {
  var x = document.getElementById("topNav");

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}