const sections = Array.from(document.querySelectorAll('.section'))

// Track user's visit of each section to run animation

const sectionVisitObserver = new IntersectionObserver(setSectionVisited, {
    threshold: 0.15
})

sections.forEach(section => sectionVisitObserver.observe(section))

function setSectionVisited(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section--visited')
        }
    })
}

// Letters animation of intro section

const introSection = sections.find(section => section.getAttribute("id") === 'intro')
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
            // Suspend animation when container is not outside viewport
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

// Reveal header when visitor scrolled page

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