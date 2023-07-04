// const inputChangeSize = document.querySelector('input#font-size-control')
// const changeSize = document.querySelector('span#text')

// inputChangeSize.addEventListener('change', event => {
//     changeSize.style.fontSize = `${event.target.value }px`
// })

function changeFontSize() {
    const inputChangeSize = document.querySelector('input#font-size-control');
    const changeSize = document.querySelector('span#text');

    const handleInputChange = (event) => {
        changeSize.style.fontSize = `${event.target.value}px`;
    };

    inputChangeSize.addEventListener('input', handleInputChange);
}

// changeFontSize();


