
function hiddenContent(reandom){
    reandom.nextElementSibling.classList.toggle('hidden')
}

document.addEventListener('click', (e) =>{
    const targetVal = e.target
        hiddenContent(targetVal)
})