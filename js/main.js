import "/style.css";
import { tns } from "/node_modules/tiny-slider/src/tiny-slider";

document.querySelector("#slider").innerHTML = `
<div class="relative">
    <div class="mobile-slider"> 
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
