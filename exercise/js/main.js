function getGrade(s1, s2, s3) {
	let numericalScore = (s1 + s2 + s3) / 3;
	if (numericalScore >= 90) {
		return "A";
	} else if (numericalScore >= 80) {
		return "B";
	} else if (numericalScore >= 70) {
		return "C";
	} else if (numericalScore >= 60) {
		return "D";
	} else if (numericalScore >= 0) {
		return "F";
	}
}
