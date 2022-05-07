function getMiddle(s) {
	s.split("");
	if (s.length % 2 === 0) {
		console.log(s[s.length / 2 - 1] + s[s.length / 2]);
	} else {
		console.log(s[Math.floor(s.length / 2)]);
	}
}

getMiddle("whyat");
