const inputChangeSize = document.querySelector('input#font-size-control')
const changeSize = document.querySelector('span#text')

inputChangeSize.addEventListener('change', event => {
    changeSize.style.fontSize = `${event.target.value }px`
})