// ==============
// RIPPLE EFFECT
// ==============

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseover', function(e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(() => {
        ripples.remove() }, 1000);
})})

// =====================
// | MOBILE NAVIGATION |
// =====================

// SELECTORS
const body = document.querySelector('body')
const header = document.querySelector('.header')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const footer = document.querySelector('.footer')

// FUNCTIONS

function disableScroll() {
    body.classList.toggle('disable-scroll')
}

function toggleMobileNav() {
    header.classList.toggle('mobile-nav--active')
    footer.classList.toggle('footer-nav--active')

}

// EVENT LISTENER

hamburgerMenu.addEventListener('click', () => {
    toggleMobileNav()
    disableScroll()
})