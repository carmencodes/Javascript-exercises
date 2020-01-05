// JavaScript HW Assignment #5
// Coded By: Carmen Jimenez

//The page will take strings one is a regular expression the other is a simple string.

function myFunction() {
  var input = prompt ("Please enter a phrase.", "");
  var myRegExp = /\w/g;
  var res = myRegExp.test(input);
  document.getElementById("demo").innerHTML = res;
}
