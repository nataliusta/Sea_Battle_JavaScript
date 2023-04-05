let randonLoc = Math.floor(Math.random() * 5); // method rounds a number DOWN to the nearest integer (method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1)
let location1 = randonLoc; // random position
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess; // current try
let hits = 0; // successful hit
let guesses = 0; // number of tries
let isSunk = false; // default state of ship

while (isSunk == false) { // while ship is not sank
    guess = prompt('Ready, aim, fire! (Enter a number from  0 till 6):'); // getting shot coordinates
    if (guess < 0 || guess > 6) { 
        alert('Please enter a valid cell mumber!');
    } else {
        guesses = guesses + 1; // in case condition is true, add one more try
        
        if (guess == location1 || guess == location2 || guess == location3) { // if one of conditions is true
            alert('HIT!');
            hits = hits + 1; // add one more try
            if (hits == 3) {
                isSunk = true;
                alert('You sank my battleship!');
            }
        } else { // if all of three conditions are false
            alert('MISS');
        }
    }
}

let stats = 'You took ' + guesses + ' guesses to sink the battleship, ' +
            'which means your shooting accurancy was ' + (3/guesses);
alert(stats);