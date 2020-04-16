'use strict'
alert('welcome to boston');

prompt('your favorite food');

confirm('yes');

var today = new Date();
var minuteNow = today.getMinutes();
var joke;

if (minuteNow > 50) {
    joke = 'Knock. Knock. Who’s there? Nobel. Nobel who? Nobel…that’s why I knocked!!';
} else if (minuteNow > 40) {
    joke = 'Knock. Knock. Who’s there? Tank. Tank who? You’re welcome.';
} 
else if (minuteNow > 30) {
    joke = 'Who’s there? Annie. Annie who? Annie thing you can do, I can do too!';
}
else if (minuteNow > 20) {
    joke = 'Knock Knock. Who’s there? Luke. Luke who? Luke through the peep hole and find out.';
} 
else if (minuteNow > 10) { 
    joke = 'Who’s there? Cow says. Cow says who? No, a cow says mooooo!';
} 
else if (minuteNow > 0) {
    joke = 'Orange you glad I didnt say banana';
}
else {
    joke = 'Welcome';
}
document.write('<h3>' + joke + '</h3>');



