'use strict'
// 1 задание
const clickButton = document.getElementById('clickButton');
const focusButton = document.getElementById('focusButton');
const hoverButton = document.getElementById('hoverButton');

clickButton.addEventListener('click', function () {
    alert('Молодец');
});

focusButton.addEventListener('focus', function () {
    alert('Умничка');
});

hoverButton.addEventListener('mouseenter', function () {
    alert('Так держать');
});
// 2 задание
const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');

redButton.addEventListener('mousedown', function () {
    document.body.style.backgroundColor = 'red';
});

redButton.addEventListener('mouseup', function () {
    document.body.style.backgroundColor = '#f7f7f7';
});

greenButton.addEventListener('mousedown', function () {
    document.body.style.backgroundColor = 'green';
});

greenButton.addEventListener('mouseup', function () {
    document.body.style.backgroundColor = '#f7f7f7';
});

blueButton.addEventListener('mousedown', function () {
    document.body.style.backgroundColor = 'blue';
});

blueButton.addEventListener('mouseup', function () {
    document.body.style.backgroundColor = '#f7f7f7';
});

// 3 задание
let block = document.getElementById('block');
let position = {
    x: 0, 
    y: 0 
};

function move() {
    block.style.left = position.x + 'px'; 
    block.style.top = position.y + 'px';
}

window.addEventListener('keydown', function (event) {
    switch (event.key.toLowerCase()) {
        case 'w': 
            position.y -= 5;
            break;
        case 's':
            position.y += 5;
            break;
        case 'a':
            position.x -= 5;
            break;
        case 'd':
            position.x += 5;
            break;
    }
    move(); 
});