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

var timesClicked = 0; //Counts how many times images were clicked

(function () {
    //ZOOM IN IMAGE
    var images = ['img/1.png','img/2.png','img/3.png','img/4.png']; //Id of images
    var places = ['.left-top-content',
    '.left-bottom-content',
    '.right-top-content',
    '.right-bottom-content'
    ]; //Position of Id
    var websites = ['https://github.com/gborkowski1998/sklep',
    'https://github.com/gborkowski1998/portfolio2017',
    'https://github.com/gborkowski1998/projektE14',
    'https://github.com/gborkowski1998/amping'
    ]; //Links to websites
    var textArea = document.querySelector('.projects'); //Section with text
    var imagePlace = document.querySelector('.image-place');
    //Div after textArea where image will be inserted
    for (var z = 0; z < images.length; z++) {
        let image = document.getElementById(images[z]);
        let place = document.querySelector(places[z]);
        let link = image.getAttribute("data-website-link");
        //Takes "data-website-link" from image
        image.addEventListener('click', () => {
            textArea.style.display = 'none'; //Hide textArea
            imagePlace.appendChild(image); //Insert image into imagePlace
            image.style.cursor = 'pointer'; //Image got pointer cursor
            timesClicked++; //Add +1 timesClicked
        if(timesClicked%2==0) { //After EVERY two clicks
            window.open(websites[link], '_blank'); //Open website
            imagePlace.removeChild(image); //Delete image from imagePlace
            let new_image = document.createElement("img"); //Create new image
            new_image.setAttribute('class', 'new_image'); //New image class is new_image
            new_image.setAttribute('width', '100%'); //New image width is 100%
            new_image.setAttribute('height', '100p%'); //New image height is 100%
            textArea.style.display = 'block'; //textArea is visible
            place.appendChild(new_image);
            //Insert new image into main position of clicked image
            new_image.src = image.id; //New image is same as old one
        }});
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