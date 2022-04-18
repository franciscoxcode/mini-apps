document.querySelector('.convert').addEventListener('click', reverseStr)

function reverseStr() {
    let str = document.querySelector('#input').value
    let wordle = str.split('').reverse().join('')
    document.querySelector('.solution').innerText = wordle
}