const themeTogglers = document.querySelectorAll('.theme-toggler input[type="checkbox"]')

themeTogglers.forEach(toggler => {
    toggler.addEventListener('change', () => handleChangeTheme(toggler))
})

function handleChangeTheme(themeToggler) {
    if (themeToggler.checked) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        themeTogglers.forEach(toggler => {
            toggler.checked = true
        })
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        themeTogglers.forEach(toggler => {
            toggler.checked = false
        })
    }
}

function checkPreferredTheme() {
    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.remove('dark')
        themeTogglers.forEach(toggler => {
            toggler.checked = false
        })
    } else {
        const isDarkThemePreferred = window.matchMedia('(prefers-color-scheme:dark)').matches
        if (isDarkThemePreferred) {
            document.documentElement.classList.add('dark')
            themeTogglers.forEach(toggler => {
                toggler.checked = true
            })
        } else {
            document.documentElement.classList.remove('dark')
            themeTogglers.forEach(toggler => {
                toggler.checked = false
            })
        }
    } 
}

checkPreferredTheme()
