import "/style.css";
import { tns } from "/node_modules/tiny-slider/src/tiny-slider";

var mobileSlider = tns({
  container: ".mobile-slider",
  items: 1,
  speed: 500,
  navcontainer: ".nav-arrows",
  controls: 1,
  autoplayButtonOutput: 0,
  autoplay: true,
  nextButton: "#right-arrow",
  prevButton: "#left-arrow",
  nav: false,
});

// var desktopSlider = tns({
//   container: ".desktop-slider",
//   items: 1,
//   speed: 500,
//   navcontainer: ".nav-arrows",
//   controls: 1,
//   autoplayButtonOutput: 0,
//   autoplay: true,
//   nextButton: "#right-arrow-d",
//   prevButton: "#left-arrow-d",
//   nav: false,
// });

// Open mobile menu
let openButton = document.querySelector("#hamburger-menu");
let overlay = document.querySelector("#overlay");
openButton.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  overlay.style.display = "block";
});

//Close mobile button
let closeButton = document.querySelector("#closeMenu");
let mobileMenu = document.querySelector("#mobile-menu");
closeButton.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  overlay.style.display = "none";
});

let nexSlide = document.querySelector("#nextArrow");
nexSlide.addEventListener("click", () => {
  let activeSlide = document.querySelector(".slide.translate-x-0");
  activeSlide.classList.remove("translate-x-0");
  activeSlide.classList.add("-translate-x-full");

  let nextSlide = activeSlide.nextElementSibling;
  nextSlide.classList.remove("translate-x-full");
  nextSlide.classList.add("translate-x-0");
});

let previousSlide = document.querySelector("#prevArrow");
previousSlide.addEventListener("click", () => {
  let activeSlide = document.querySelector(".slide.translate-x-0");
  activeSlide.classList.remove("translate-x-0");
  activeSlide.classList.add("translate-x-full");

  let previousSlide = activeSlide.previousElementSibling;
  previousSlide.classList.remove("-translate-x-full");
  previousSlide.classList.add("translate-x-0");
});
