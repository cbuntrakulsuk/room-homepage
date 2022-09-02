import "/style.css";

// Open mobile menu
let openButton = document.querySelector("#hamburger-menu");
let overlay = document.querySelector("#overlay");
openButton.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  overlay.style.display = "block";
  mobileMenu.style.transform = `translateY(${0}%)`;
  mobileMenu.style.transition = "transform 0.4s ease-in-out";
  mobileMenu.style.transitionDuration = "300ms";
});

//Close mobile button
let closeButton = document.querySelector("#closeMenu");
let mobileMenu = document.querySelector("#mobile-menu");
closeButton.addEventListener("click", () => {
  mobileMenu.style.transform = `translateY(-${100}%)`;
  mobileMenu.style.transition = "transform 0.4s ease-in-out";
  mobileMenu.style.transitionDuration = "300ms";
  overlay.style.display = "none";
});

//new slider
const sliderImages = document.querySelectorAll(".slide");
const nextArrow = document.querySelector("#nextArrow");
const prevArrow = document.querySelector("#prevArrow");
let counter = 1;

sliderImages.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`; //sets each image next to eachother
  slide.style.transform = `translateX(-${counter * 100}%)`; //start at second slide
});

nextArrow.addEventListener("click", () => {
  if (counter >= sliderImages.length - 1) return;
  counter++;
  sliderImages.forEach((slide) => {
    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.transitionDuration = "700ms";
    slide.style.transform = `translateX(-${counter * 100}%)`; //slides image
  });
});

prevArrow.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  sliderImages.forEach((slide) => {
    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.transitionDuration = "700ms";
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
});

addEventListener("transitionend", () => {
  if (counter === 4) {
    console.log("transition end");
    sliderImages.forEach((slide) => {
      slide.style.transition = "none";
    });
    counter = 1;
    sliderImages.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  }
  if (counter === 0) {
    console.log("transition end");
    sliderImages.forEach((slide) => {
      slide.style.transition = "none";
    });
    counter = 3;
    sliderImages.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  }
});

//mobileSlider
const mobileImages = document.querySelectorAll(".mobileSlide");
const mobileNextArrow = document.querySelector("#m-nextArrow");
const mobilePrevArrow = document.querySelector("#m-prevArrow");
let mCounter = 1;

mobileImages.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`; //sets each image next to eachother
  slide.style.transform = `translateX(-${mCounter * 100}%)`; //start at second slide
});

mobileNextArrow.addEventListener("click", () => {
  if (mCounter >= mobileImages.length - 1) return;
  mCounter++;
  mobileImages.forEach((slide) => {
    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.transitionDuration = "700ms";
    slide.style.transform = `translateX(-${mCounter * 100}%)`; //slides image
  });
});

mobilePrevArrow.addEventListener("click", () => {
  if (mCounter <= 0) return;
  mCounter--;
  mobileImages.forEach((slide) => {
    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.transitionDuration = "700ms";
    slide.style.transform = `translateX(-${mCounter * 100}%)`;
  });
});

addEventListener("transitionend", () => {
  if (mCounter === 4) {
    console.log("transition end");
    mobileImages.forEach((slide) => {
      slide.style.transition = "none";
    });
    mCounter = 1;
    mobileImages.forEach((slide) => {
      slide.style.transform = `translateX(-${mCounter * 100}%)`;
    });
  }
  if (mCounter === 0) {
    console.log("transition end");
    mobileImages.forEach((slide) => {
      slide.style.transition = "none";
    });
    mCounter = 3;
    mobileImages.forEach((slide) => {
      slide.style.transform = `translateX(-${mCounter * 100}%)`;
    });
  }
});
