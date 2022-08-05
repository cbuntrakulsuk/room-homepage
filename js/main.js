import "/style.css";
import { tns } from "/node_modules/tiny-slider/src/tiny-slider";

document.querySelector("#slider").innerHTML = `
<div class="relative">
    <div class="mobile-slider object-bottom"> 
        <img src="./images/mobile-image-hero-1.jpg" alt="room" />
        <img src="./images/mobile-image-hero-2.jpg" alt="room" />
        <img src="./images/mobile-image-hero-3.jpg" alt="room" />
    </div>
    <div id="nav-arrows" class="flex absolute bottom-0 right-0">
        <img id="left-arrow" class="h-14 w-14 px-5 py-4 bg-black cursor-pointer" src="./images/icon-angle-left.svg" alt="left-arrow" />
        <img id="right-arrow" class="h-14 w-14 px-5 py-4 bg-black cursor-pointer" src="./images/icon-angle-right.svg" alt="left-arrow" />
    </div>
</div>
`;

document.querySelector("#desktopSlider").innerHTML = `
<div class="relative">
    <div class="desktop-slider object-bottom">
        <img src="./images/desktop-image-hero-1.jpg" alt="room" />
        <img src="./images/desktop-image-hero-2.jpg" alt="room" />
        <img src="./images/desktop-image-hero-3.jpg" alt="room" />
    </div>
    <div id="nav-arrows" class="flex absolute bottom-0 right-0">
        <img id="left-arrow-d" class="h-14 w-14 px-5 py-4 bg-black cursor-pointer" src="./images/icon-angle-left.svg" alt="left-arrow" />
        <img id="right-arrow-d" class="h-14 w-14 px-5 py-4 bg-black cursor-pointer" src="./images/icon-angle-right.svg" alt="left-arrow" />
    </div>
</div>
`;

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

var desktopSlider = tns({
  container: ".desktop-slider",
  items: 1,
  speed: 500,
  navcontainer: ".nav-arrows",
  controls: 1,
  autoplayButtonOutput: 0,
  autoplay: true,
  nextButton: "#right-arrow-d",
  prevButton: "#left-arrow-d",
  nav: false,
});

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
