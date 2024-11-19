const projectsSection = sections.find(section => section.getAttribute("id") === "projects")
const carousel = projectsSection.querySelector('.carousel__content')
const scrollLeftBtn = projectsSection.querySelector('.carousel__scroll-left-button')
const scrollRightBtn = projectsSection.querySelector('.carousel__scroll-right-button')

const carouselItemWidth = parseInt(getCssVariable("--carousel-item-width").slice(0, -2))
const totalCarouselWidth = carouselItemWidth * projectsSection.querySelectorAll('.carousel__content-item').length

const AUTO_SCROLL_INTERVAL = 4000

let autoScrollInterval = setInterval(autoScroll, AUTO_SCROLL_INTERVAL)

function autoScroll() {
    if (projectsSection.classList.contains('section--visited')) {
        if (carousel.scrollLeft >= totalCarouselWidth - carousel.clientWidth) {
            carousel.scrollLeft = 0
        } else {
            carousel.scrollLeft += carouselItemWidth
        }
    }
}

scrollLeftBtn.addEventListener("click", scrollLeft)
scrollRightBtn.addEventListener("click", scrollRight)

carousel.addEventListener('pointerdown', startDrag)

function startDrag(e) {
    e.preventDefault()
    clearInterval(autoScrollInterval)
    const initialPos = e.clientX
    carousel.addEventListener('pointerup', stopDrag)
    function stopDrag(e){
        const finalPos = e.clientX
        if (initialPos < finalPos) {
            scrollLeft()
        } else {
            scrollRight()
        }
        carousel.removeEventListener('pointerup', stopDrag)
    }
}

function scrollLeft() {
    if (carousel.scrollLeft === 0) {
        carousel.scrollLeft = totalCarouselWidth - carousel.clientWidth
    } else {
        carousel.scrollLeft -= carouselItemWidth
    }
    clearInterval(autoScrollInterval)
    autoScrollInterval = setInterval(autoScroll, AUTO_SCROLL_INTERVAL)
}

function scrollRight() {
    if (carousel.scrollLeft === totalCarouselWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0
    } else {
        carousel.scrollLeft += carouselItemWidth
    }
    clearInterval(autoScrollInterval)
    autoScrollInterval = setInterval(autoScroll, AUTO_SCROLL_INTERVAL)
}
