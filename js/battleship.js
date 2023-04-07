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

view.displayMiss('00');
view.displayHit('34');
view.displayMiss('55');
view.displayHit('12');
view.displayMiss('25');
view.displayHit('26');

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
        for(let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
        }
    }
};