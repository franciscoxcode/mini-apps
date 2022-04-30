function validatePIN(pin) {
	if (pin.length === 4 || pin.length === 6) {
		if (Number.isInteger(Number(pin)) === true && Number(pin) >= 0) {
			console.log(true);
		} else {
			console.log(false);
		}
	} else {
		console.log(false);
	}
}

validatePIN("-12345");
