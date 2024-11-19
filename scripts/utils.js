const getCssVariable = (variableName) => {
    const computedStyle = window.getComputedStyle(document.documentElement)
    const cssVariable = computedStyle.getPropertyValue(variableName)

    return cssVariable
}