const burgerButton = document.querySelector('.burger-button')
const menu = document.querySelector('.fullscreen-menu')

burgerButton.addEventListener('click', toggleMenu)
menu.addEventListener("click", delegateMenuClose)

function delegateMenuClose (e) {
    const {target: {tagName}} = e
    if (tagName === "A") closeMenu()
}

function toggleMenu() {
    menu.classList.contains('fullscreen-menu--open')
    ? closeMenu()
    : openMenu()
}

function openMenu() {
    menu.classList.add('fullscreen-menu--open')
    document.body.classList.add('scroll-locked')
}

function closeMenu() {
    menu.classList.remove('fullscreen-menu--open')
    document.body.classList.remove('scroll-locked')
}
