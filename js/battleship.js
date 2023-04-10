let view = {
    displayMessage: function(msg) {
        let messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;
    },

    displayHit: function(location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'hit');
    },

    displayMiss: function(location) {
        let miss = document.getElementById(location);
        miss.setAttribute('class', 'miss');
    }
};

view.displayMessage('Tap tap, is this thing on?');

let model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [
        {
            locations: ['06','16','26'],
            hits: ['','','']
        },
        {
            locations: ['24','34','44'],
            hits: ['','','']
        },
        {
            locations: ['10','11','12'],
            hits: ['','','']
        }
    ],

    fire: function(guess) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            let index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = 'hit';
                view.displayHit(guess);
                view.displayMessage('HİT!');
                if (this.isSunk(ship)) {
                    view.displayMessage('You sunk my battleship!');
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage('You missed!');
        return false;
    },

    isSunk: function(ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== 'hit') {
                return false; // ship is not sunk
            }
        }
        return true; // ship is sunk
    }
};

model.fire('53');
model.fire('06');
model.fire('16');
model.fire('26');
model.fire('34');
model.fire('24');
model.fire('44');
model.fire('66');
model.fire('11');
model.fire('12');
model.fire('15');

let controller = {
    guesses: 0,

    processGuess: function(guess) {

    }
};

function parseGuess(guess) {
    if (guess === null || guess.length !== 2) {
        alert('Oops! Please enter a letter and a number on the board.');
    }
}