document.querySelector('.converter').addEventListener('click', binaryArrayToNumber)

function binaryArrayToNumber(arr) {
    let decimal = 0;
    let binary = document.querySelector('#input').value 
    binary.split();
    let length = binary.length
    for (let i= 0; i < binary.length; i++) {
        length = length - 1
        decimal = decimal + (binary[i] * 2**length)
    }
    document.querySelector('.answer').innerText = decimal
  };