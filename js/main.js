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

//new slider

const sliderImages = document.querySelectorAll(".slide");
const nextArrow = document.querySelector("#nextArrow");
const prevArrow = document.querySelector("#prevArrow");
let counter = 0;

sliderImages.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
  sliderImages.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

nextArrow.addEventListener("click", () => {
  counter++;
  slideImage();
});

prevArrow.addEventListener("click", () => {
  console.log("clicked prev");
  counter--;
  slideImage();
});
