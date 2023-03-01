let randonLoc = Math.floor(Math.random() * 5); // method rounds a number DOWN to the nearest integer(method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1)
let location1 = randonLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
    guess = prompt('Ready, aim, fire! (Enter a number from 0-6):');
    if (guess < 0 || guess > 6) {
        alert('Please enter a valid cell mumber!');
    } else {
        guesses = guesses + 1;
        
        if (guess == location1 || guess == location2 || guess == location3) {
            alert('HIT!');
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert('You sank my battleship');
            }
        } else {
            alert('MISS');
        }
    }
}

let stats = 'You took ' + guesses + 'guesses to sink the battleship, ' +
            'which means your shooting accurancy was ' + (3/guesses);
alert(stats);