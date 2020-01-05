// Assignment 2 Part 1
// Coded By: Carmen Jimenez

// Code JS function to display even numbers from 2 - 20, using a for loop.

function evenOddNum() {
	var arr = [];
	// Even Numbers
	for (var x = 2; x <= 20; x++) {
		if (x % 2 == 0) {
			arr.push(x);
			alert(arr);
		}
	}
	// Odd Numbers
	for (var y = 20; y >= 0; y--) {
		if (y % 2 !== 0) {
			arr.push(y);
			alert(arr);
		}
	}
}