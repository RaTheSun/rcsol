/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*=============== Copy Icon ===============*/
function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        const copiedIcon = document.getElementById('copied-icon');
        copiedIcon.classList.add('show');

        setTimeout(() => {
            copiedIcon.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

/*=============== pixel effect ===============*/
document.addEventListener('DOMContentLoaded', function() {
    const pixelBreaker = document.querySelector('.pixel-breaker');
    const pixelBreakerEnd = document.querySelector('.pixel-breaker-end');
    const downwardPixelCount = 50; // Number of downward pixels
    const upwardPixelCount = 750; // Number of upward pixels
    const upwardYellowPixelCount = 750; // Number of yellow pixels in pixel-breaker-end

    // Function to create a pixel
    function createPixel(x, y, className) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel', className);
        pixel.style.left = `${x}%`;
        pixel.style.top = `${y}px`;
        return pixel;
    }

    // Function to generate weighted random y position for downward pixels
    function getRandomYDownward() {
        const baseY = 0; // Base Y position at the bottom of the pixel-breaker
        const randomFactor = Math.random();
        const y = baseY + (Math.pow(randomFactor, 4) * 600); // Quadratic distribution for higher density near base
        return y;
    }

    // Function to generate weighted random y position for upward pixels
    function getRandomYUpward() {
        const baseY = 0; // Base Y position at the bottom of the pixel-breaker
        const randomFactor = Math.random();
        const y = baseY - (Math.pow(randomFactor, 12) * 30); // Quadratic distribution for higher density near base
        return y;
    }

    // Function to generate weighted random y position for upward yellow pixels
    function getRandomYUpwardYellow() {
        const baseY = 0; // Base Y position at the bottom of the pixel-breaker-end
        const randomFactor = Math.random();
        const y = baseY - (Math.pow(randomFactor, 12) * 100); // Quadratic distribution for higher density near base
        return y;
    }

    // Create downward black and yellow pixels in pixelBreaker
    for (let i = 0; i < downwardPixelCount; i++) {
        const x = Math.random() * 100;
        const y = getRandomYDownward();
        const pixelClass = i % 2 === 0 ? 'black-pixel' : 'yellow-pixel'; // Alternate classes for variety
        const pixel = createPixel(x, y, pixelClass);
        pixelBreaker.appendChild(pixel);
    }

    // Create upward black pixels in pixelBreaker
    for (let i = 0; i < upwardPixelCount; i++) {
        const x = Math.random() * 100;
        const y = getRandomYUpward();
        const pixel = createPixel(x, y, 'black-pixel');
        pixelBreaker.appendChild(pixel);
    }

    // Create yellow upward pixels in pixelBreakerEnd
    for (let i = 0; i < upwardYellowPixelCount; i++) {
        const x = Math.random() * 100;
        const y = getRandomYUpwardYellow();
        const pixel = createPixel(x, y, 'yellow-pixel');
        pixelBreakerEnd.appendChild(pixel);
    }
});
