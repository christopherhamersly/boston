'use strict'


alert('welcome to boston');

function favFood() {
var favoriteFood = '';
    while( (favoriteFood != 'chowdah') && (favoriteFood != 'lobsta')){  
        favoriteFood = prompt('What is your favorite food? (chowdah or lobsta)').toLowerCase();
    }
 }
 
function guessWhichYear() {
 
    var correctAnswer = 1630;
    
        for(var i = 0; i < 12; i = i + 1){
            var numberGuess = prompt('Please Guess which year Boston was founded');
            if(numberGuess == correctAnswer){
                alert('Go Pats Go!');
                break;
            } else {
                alert('Sorry, not quite');
            }
            if (i == '11') {
                alert('Get outta here');
            ;
            }
        }
}

function knockKnockJoke () {
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
}

favFood ();
guessWhichYear ();
knockKnockJoke ();




