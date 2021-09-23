import $ from 'jquery'
import 'slick-carousel'

//Selectors
const hamBtn = document.querySelector('.navbar__hamburger');
const menu = document.querySelector('.navbar__links');
//event listeners
hamBtn.addEventListener('click', openMenu);

//functions
function openMenu(e) {
    //console.log(e.target);
    hamBtn.classList.toggle("open");
    menu.classList.toggle("showMenu")
}


//slider

$(window).on('load', function(){
    $('.slider').slick({
        //mobileFirst:true,
        // variableWidth: true,
        //adaptiveHeight: true,
        prevArrow: '.hero__controls__arrow__prev',
        nextArrow: '.hero__controls__arrow__next',
        
    })
});