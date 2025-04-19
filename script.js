const obj = { a: 13, b: 42, c: 211 };
for (i in obj) console.log(i + ': ' + obj[i]);
// JavaScript Document

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}