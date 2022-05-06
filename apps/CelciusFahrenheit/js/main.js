document.querySelector(".converter1").addEventListener("click", toFahrenheit);
document.querySelector(".converter2").addEventListener("click", toCelcius);

function toFahrenheit() {
	let celcius = document.querySelector("#input").value;
	let fahrenheit = celcius * (9 / 5) + 32;
	document.querySelector(".answer").innerText = `${fahrenheit}° F`;
}

function toCelcius() {
	let fahrenheit = document.querySelector("#input").value;
	let celcius = (((fahrenheit - 32) * 5) / 9).toFixed(1);
	document.querySelector(".answer").innerText = `${celcius}° C`;
}
