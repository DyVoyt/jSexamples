
function hiddenText(element){
    element.classList.add('hidden')
}

document.addEventListener('click', (e) => {
    const el = e.target.closest('.content__item')
    hiddenText(el)
})