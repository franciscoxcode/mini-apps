function filter_list(l) {
	const justNumbers = l.filter((element) => typeof element === "number");
	console.log(justNumbers);
}

filter_list([1, 2, "aasf", "1", "123", 123]);
