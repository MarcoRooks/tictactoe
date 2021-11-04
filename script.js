const cellElements = document.querySelectorAll(".cell")
// ******************************************************************

cellElements.forEach(cell => {
    cell.addEventListener('click', cellClicked, { once: true })
})

function cellClicked(e) {
    console.log('click')
}