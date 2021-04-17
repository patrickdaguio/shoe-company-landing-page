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
const links = document.querySelectorAll('.header__nav__list__item')

// FUNCTIONS

function disableScroll() {
    container.classList.toggle('disable-scroll')
}

function toggleMobileNav() {
    header.classList.toggle('mobile-nav--active')
    footer.classList.toggle('footer-nav--active')
    links.forEach(link => {
        link.classList.toggle('fadeIn')
    })
}

// ==========
// | MODAL |
// =========

const modalBtn = document.querySelector('.product__cta--know')
const container = document.querySelector('.container')
const modalContainer = document.querySelector('.modal')
const productContainer = document.querySelector('.product')
const exitModal = document.querySelector('.modal__ctas__cta--close')

function openModal() {
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
    modalContainer.style.display = 'flex'
    productContainer.style.display = 'none'
    footer.classList.add('footer-modal--active')
    header.style.pointerEvents = 'none'
}

function closeModal() {
    container.style.backgroundColor = 'transparent'
    modalContainer.style.display = 'none'
    productContainer.style.display = 'flex'
    footer.classList.remove('footer-modal--active')
    header.style.pointerEvents = 'auto'
}

// EVENT LISTENER

hamburgerMenu.addEventListener('click', () => {
    toggleMobileNav()
    disableScroll()
})

modalBtn.addEventListener('click', openModal)
exitModal.addEventListener('click', closeModal)

// ==============
// | SHOE THEME |
// ==============

const modalCircles = document.querySelectorAll('.modal__circle')
const modalTitle = document.querySelector('.modal__title')
const modalImg = document.querySelector('.modal__product__img')
const modalImgWrapper = document.querySelector('.modal__product__img-wrapper')

function changeTheme() {
  let regex = /[^0-9\.]+/gi
  modalImgWrapper.classList.remove('shoe-animation')
  window.requestAnimationFrame(() => modalImgWrapper.classList.add('shoe-animation'))
  if (this.classList.contains('modal__circle--one')) {
    if (body.className.match(regex)) {
      body.className = body.className.replace(regex, 'shoe-purple-theme')
      modalTitle.innerText = 'Purple Sunrise'
      modalImg.src = "/images/themes/purple.png"
      modalImgWrapper.classList.remove('theme__img')
      modalImgWrapper.classList.remove('theme__img-1')
    }
  } else if (this.classList.contains('modal__circle--two')) {
    if (body.className.match(regex)) {
      body.className = body.className.replace(regex, 'shoe-orange-theme')
      modalTitle.innerText = 'Orange Sunset'
      modalImg.src = "/images/themes/orange1.png"
      modalImgWrapper.classList.remove('theme__img-1')
      modalImgWrapper.classList.add('theme__img')
    }
  } else if (this.classList.contains('modal__circle--three')) {
    if (body.className.match(regex)) {
      body.className = body.className.replace(regex, 'shoe-red-theme')
      modalTitle.innerText = 'Grey Heat'
      modalImg.src = "/images/themes/red1.png"
      modalImgWrapper.classList.remove('theme__img-1')
      modalImgWrapper.classList.add('theme__img')
    }
  } else {
    if (body.className.match(regex)) {
      body.className = body.className.replace(regex, 'shoe-black-theme')
      modalTitle.innerText = 'Moonlight'
      modalImg.src = "/images/themes/black1.png"
      modalImgWrapper.classList.add('theme__img-1')
    }
  }
}

modalCircles.forEach(circle => {
    circle.addEventListener('click', changeTheme)
})
