// Assignment 2 Part 2
// Coded By: Carmen Jimenez

// For loop and print out in alert box, first 10 prime numbers.

function decem() {
	var num = 30;
	var arr = [];

	for (var x = 1; x < num; x++) {
		prime = true;
		for (var y = 2; y < x; y++) {
			if (x % y == 0) {
				prime = false;
			}
		}
		if (prime) {
			arr.push(x);
			alert(arr);
		}
	}
}