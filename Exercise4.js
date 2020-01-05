// Assignment 2 Part 3
// Coded By: Carmen Jimenez

// In this part of the assignment, I want you to duplicate the for loops you created in part1. Using NodeJS, create a program to display the even numbers from 2 to 20 and then the odd numbers from 20 to 1. Again; this is to be done in NodeJS. Please include just the .js file in your submission.

var arr = [];
// Even Numbers
for (var x = 2; x <= 20; x++) {
	if (x % 2 == 0) {
		arr.push(x);
	}
}
// Odd Numbers
for (var y = 20; y >= 0; y--) {
	if (y % 2 !== 0) {
		arr.push(y);
	}
}

console.log(arr);