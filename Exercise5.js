// JavaScript Homework Assignment #3
// Coded By: Carmen Jimenez

// Write a module for the console that displays High-order (improving function calls).


function mod1(num) {
	return num * num;
}

function mod2() {
	return mod1(7) / 2;
}

console.log(mod2());

// High-Order Functions with one function being called and used by a secondary function. ^