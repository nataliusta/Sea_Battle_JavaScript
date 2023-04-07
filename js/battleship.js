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

let ship1 = {
    locations: ['10','20','30'],
    hits: ['','','']
};

let ship2 = {
    locations: ['32','33','34'],
    hits: ['','','']
};

let ship3 = {
    locations: ['63','64','65'],
    hits: ['','','hit']
};

