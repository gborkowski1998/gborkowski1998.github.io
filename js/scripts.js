"use strict";

(function () {
    //POP UP IMAGES
    var imageId = ['html','css','js','sass','gulp','git','node'];
    
    for (var i = 0; i < imageId.length; i++) {
    	let image = document.getElementById(imageId[i]);
    	image.addEventListener('mouseover', () => {
            image.style.bottom = '20px';
            image.style.setProperty('transition', '.4s all ease');
            image.style.setProperty('-webkit-transition', '.4s all ease');
            image.style.setProperty('-moz-transition', '.4s all ease');
            image.style.setProperty('-o-transition', '.4s all ease');
            //Animation for different browsers
        });
        image.addEventListener('mouseout', () => {
            image.style.bottom = '0px';
        });
    }
})();

(function () {
    //SCROLL DOWN
    var arrowDown = document.querySelector('.arrowDown'); //arrowDown image
    var arrowUp = document.querySelector('.arrowUp'); //arrowUp image
    var position = document.getElementById('1').getBoundingClientRect();
    //Takes position of object
    var websiteEnd = document.querySelector('.projects').getBoundingClientRect();
    //Takes position of "end" of website
    arrowDown.addEventListener('click', () => {
        arrowUp.style.display = 'block';
        if(position.top < 0) { //If website is refreshed it avoids to scroll page up
            window.scrollBy({ 
                bottom: 0,
              });
        }
        if(position.top > 0) { //If website is opened
            var currentScrollPos = window.pageYOffset;
            //Takes current position of scroll
            if(currentScrollPos > websiteEnd.bottom){
            //If you are at the end of the website
            arrowDown.style.display = 'none';
            //Hide arrowDown image
            }
        window.scrollBy({ 
            top: position.top, //It goes position.top pixels down
            behavior: 'smooth'
          });
        }
    })
})();

(function () {
    //SCROLL UP
    var arrowDown = document.querySelector('.arrowDown'); //arrowDown image
    var arrowUp = document.querySelector('.arrowUp'); //arrowUp image
    arrowUp.addEventListener('click', () => {
        arrowDown.style.display = 'block';
        //arrowDown image is visible again
        arrowUp.style.display = 'none';
        //arrowUp image is hidden
        window.scrollBy({ 
            top: -2000000, //Goes to top of the webpage
            behavior: 'smooth' 
          });
    })
})();