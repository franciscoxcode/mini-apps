document.querySelector('.converter1').addEventListener('click', toUpperCase)
document.querySelector('.converter2').addEventListener('click', toLowerCase)

function toUpperCase() {
    let text = document.querySelector('#input').value
    document.querySelector('.answer').innerText = text.toUpperCase()
}

function toLowerCase() {
    let text = document.querySelector('#input').value
    document.querySelector('.answer').innerText = text.toLowerCase()
}

