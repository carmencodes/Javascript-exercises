// JavaScript HW Assignment #4
// Coded By: Carmen Jimenez

// Obtain a list of names from user, then display list of names when user types nothing into the field.


var arr = [];
var names = '';
var span = document.getElementById('names');

function list() {
	while ((names = prompt('Please enter a name: ')) !== '') {
		arr[arr.length] = names;
	}
	arr.sort();

	var listOfNames = arr.join('<br />');
  span.innerHTML = listOfNames;
}

window.onload = list();