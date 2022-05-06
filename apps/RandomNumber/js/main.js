document.querySelector(".converter").addEventListener("click", randomizer);

function randomizer() {
	let maxNum = document.querySelector("#input").value;
	let randy = Math.floor(Math.random() * maxNum);
	document.querySelector(".answer").innerText = randy;
}
