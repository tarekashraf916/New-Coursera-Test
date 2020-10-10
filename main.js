var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

var speakWord = "Good Bye";
var speakHllo = "hello";

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

if (firstLetter === 'j') {
    console.log(speakWord + " " + names[i]);
  } else {
    console.log(speakHllo + " " + names[i]);
  }
}