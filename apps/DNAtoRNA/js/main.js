document.querySelector('.converter').addEventListener('click', dnaToRna)

function dnaToRna() {
    let dna = document.querySelector('#input').value
    let rna = dna.replace(/[T]/gi, "U");
    document.querySelector('.answer').innerText = rna
}