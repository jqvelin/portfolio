// For both mobile and desktop variants
const themeTogglers = document.querySelectorAll('.theme-toggler input[type="checkbox"]')

themeTogglers.forEach(toggler => {
    toggler.addEventListener('change', () => handleChangeTheme(toggler))
})

function handleChangeTheme(themeToggler) {
    if (themeToggler.checked) setTheme("dark")
    else setTheme("light")
}

function checkPreferredTheme() {
    if (localStorage.getItem('theme') === 'light') {
        setTheme('light')
    } else {
        const isDarkThemePreferred = window.matchMedia('(prefers-color-scheme:dark)').matches
        if (isDarkThemePreferred) setTheme("dark")
        else setTheme('light', false)
    } 
}

function setTheme(theme, persist = true) {
    document.documentElement.classList[theme === "dark" ? "add" : "remove"]('dark')
    persist && localStorage.setItem('theme', theme)
    themeTogglers.forEach(toggler => {
        toggler.checked = theme === "dark"
    })
}

checkPreferredTheme()