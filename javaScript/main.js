var name = prompt("Please Enter Your Name");
console.log(name);
while (name === '' || !isNaN(name)) {
    name = prompt("please enter your name !!!");
}
alert("Hello " + name );
document.write("<p>" + name + "</p>");
document.write("<footer>2021 by Tahany Ali</footer>");
var star = prompt("What star rating would you give, 1-5?");
while(star < 0 || star > 5) {
  star = prompt("please enter from 1 to 5");
}
for (var i = 0; i < star; i++) {
  document.write("<img src='https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png' />");
  console.log(i);
}
console.log("Rating is " + star);
/*var age = prompt(" Please Enter Your Age");

if(age <= 18) {
  alert("you are too young");
} else if (age > 18 && age < 30) {
  alert("you are the best Candidate");
} else {
  alert("God Bless You");
}

var language = prompt("Enter Your Best programming Language");
console.log(language);

alert("You Love " + language);*/



