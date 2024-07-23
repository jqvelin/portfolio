const burgerButton = document.querySelector('.burger-button')
const menu = document.querySelector('.fullscreen-menu')

burgerButton.addEventListener('click', handleOpenFullscreenMenu)

function handleOpenFullscreenMenu() {
    if (!menu.classList.contains('fullscreen-menu--open')) {
        menu.classList.add('fullscreen-menu--open')
        document.body.classList.add('scroll-locked')
    } else {
        menu.classList.remove('fullscreen-menu--open')
        document.body.classList.remove('scroll-locked')
    }
}