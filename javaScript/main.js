var name = prompt("Please Enter Your Name");
console.log(name);
alert("Hello " + name );
document.write("<p>" + name + "</p>");
document.write("<footer>2021 by Tahany Ali</footer>");

var age = prompt(" Please Enter Your Age");

if(age <= 18) {
  alert("you are too young");
} else if (age > 18 && age < 30) {
  alert("you are the best Candidate");
} else {
  alert("God Bless You");
}

var language = prompt("Enter Your Best programming Language");
console.log(language);

alert("You Love " + language);



