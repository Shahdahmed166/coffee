
setTimeout(function() {
    document.getElementById('myHeading').style.opacity = 1; 
}, 1000); 

var header = document.querySelector("header");
var btn = document.querySelector(".btn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    header.classList.remove("navdefault");
    header.classList.add("navscroll");
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
    header.classList.remove("navscroll");
    header.classList.add("navdefault");
  }
});

btn.addEventListener("click", function () {
  window.scrollTo("", 0);
});