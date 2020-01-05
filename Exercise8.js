// JavaScript HW Assignment #4
// Coded By: Carmen Jimenez

// Create a function using the Person data type for object literal notation.

var oopsy = document.getElementById('oopsy');

function Person(fname, lname) {
	this.fname = fname;
	this.lname = lname;
}

Person.prototype.getName = function() {
	return this.fname + " " + this.lname;
};

Person.prototype.saying = function() {
	oopsy.innerHTML = 'Hello ' + this.getName() + ', nice to meet you!';
};

var userName = new Person('Carmen', 'J.');

userName.saying();