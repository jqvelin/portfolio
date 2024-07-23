const sections = Array.from(document.querySelectorAll('.section'))

// Configuration for all the sections 

const sectionIntersectionObserver = new IntersectionObserver(setSectionVisible, {
    threshold: 0.15
})

sections.forEach(section => sectionIntersectionObserver.observe(section))

function setSectionVisible(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section--seen')
        }
    })
}

// Intro section

const introSection = sections.find(section => section.classList.contains('intro'))
const animatedTextLetters = document.querySelectorAll('.animated-text span')

const animatedTextObserver = new IntersectionObserver(runAnimation, {
    threshold: 0.45
})

let animatedTextAnimationInterval

animatedTextObserver.observe(introSection)

function runAnimation(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animatedTextAnimationInterval = setInterval(changeAnimatedTextAppearance, 500)
        } else {
            clearInterval(animatedTextAnimationInterval)
        }
    })
}


function changeAnimatedTextAppearance() {
    animatedTextLetters.forEach(letter => {
        const randomRotation = Math.floor(Math.random() * 25) - 12
        letter.style.transform = `rotate(${randomRotation}deg)`
    })
}

const headerObserver = new IntersectionObserver(checkHeaderState, {
    threshold: 1.0
})

function checkHeaderState(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.header').classList.remove('header--pop-up')
        } else {
            document.querySelector('.header').classList.add('header--pop-up')
        }
    })
}

headerObserver.observe(introSection)

// Projects section

const projectsSection = sections.find(section => section.classList.contains('projects'))
const carousel = projectsSection.querySelector('.carousel__content')
const scrollLeftBtn = projectsSection.querySelector('.carousel__scroll-left-button')
const scrollRightBtn = projectsSection.querySelector('.carousel__scroll-right-button')

const carouselItemWidth = 300
const totalCarouselWidth = 300 * projectsSection.querySelectorAll('.carousel__content-item').length

let autoScrollInterval = setInterval(autoScroll, 4000)

function autoScroll() {
    if (projectsSection.classList.contains('section--seen')) {
        if (carousel.scrollLeft >= totalCarouselWidth - carousel.clientWidth) {
            carousel.scrollLeft = 0
        } else {
            carousel.scrollLeft += carouselItemWidth
        }
    }
}

scrollLeftBtn.onclick = scrollLeft
scrollRightBtn.onclick = scrollRight

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
    autoScrollInterval = setInterval(autoScroll, 4000)
}

function scrollRight() {
    if (carousel.scrollLeft === totalCarouselWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0
    } else {
        carousel.scrollLeft += carouselItemWidth
    }
    clearInterval(autoScrollInterval)
    autoScrollInterval = setInterval(autoScroll, 4000)
}
