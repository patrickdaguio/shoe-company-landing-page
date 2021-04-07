// =====================
// | MOBILE NAVIGATION |
// =====================

// SELECTORS
const body = document.querySelector('body')
const header = document.querySelector('.header')
const hamburgerMenu = document.querySelector('.hamburger-menu')

// FUNCTIONS

function disableScroll() {
    body.classList.toggle('disable-scroll')
}

function toggleMobileNav() {
    header.classList.toggle('mobile-nav--active')
}

// EVENT LISTENER

hamburgerMenu.addEventListener('click', () => {
    toggleMobileNav()
    disableScroll()
})