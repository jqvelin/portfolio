const burgerButton = document.querySelector('.burger-button')
const menu = document.querySelector('.fullscreen-menu')
const menuLinks = menu.querySelectorAll('a')

burgerButton.addEventListener('click', handleFullscreenMenuState)
menuLinks.forEach(link => link.addEventListener('click', handleFullscreenMenuState))

function handleFullscreenMenuState() {
    if (!menu.classList.contains('fullscreen-menu--open')) {
        menu.classList.add('fullscreen-menu--open')
        document.body.classList.add('scroll-locked')
    } else {
        menu.classList.remove('fullscreen-menu--open')
        document.body.classList.remove('scroll-locked')
    }
}