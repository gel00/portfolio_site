const checkpoint = window.innerHeight;
let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", () => {
  let opacity = 0;
  let bgColor = "transparent";
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
    bgColor = "transparent";
  } else {
    opacity = 0;
    bgColor = "#111111";
  }
  document.getElementById("landing").style.opacity = opacity;
  document.getElementById("topNav").style.backgroundColor = bgColor;
  if (prevScrollpos > currentScroll) {
    document.getElementById("topNav").style.top = "0";
  } else {
    document.getElementById("topNav").style.top = "-60px";
  }
  prevScrollpos = currentScroll;
});

function navToggle() {
  let x = document.getElementById("topNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
