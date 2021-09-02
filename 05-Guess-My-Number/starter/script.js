'use strict';

let score = 25;
document.querySelector('.score').textContent= score;

let highscore = 0;



let resetNumber = reset =>  Math.floor((Math.random() * 20) +1);
let currentNumber = resetNumber();
console.log(currentNumber);



document.querySelector('.again').addEventListener('click', function() {
    currentNumber = resetNumber();
    score = 25;
    document.querySelector('body').style.backgroundColor = '#000';
    document.querySelector('.message').textContent = '';
    document.querySelector('.guess').textContent = '';
    document.querySelector('.number').textContent=currentNumber;
});


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);;
    console.log(`your guess was ${guess} and the solution was ${currentNumber}`);

    if (!guess) {
        document.querySelector('.message').textContent = 'no number!';
    } else if (guess===currentNumber) {
        document.querySelector('.message').textContent = 'Goed geraden';
        document.querySelector('body').style.backgroundColor = '#119DA4';
        document.querySelector('.number').style.width = '30rem';
        
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textcontent = highscore;
            console.log(`de highscore is nu dus ${highscore}`);
        }
        else {
            console.log('niks');
        }

    }
    else if (guess > currentNumber) {
        document.querySelector('.message').textContent = 'te hoog';
        score--;
        
    }
    else {
        document.querySelector('.message').textContent = 'te laag';
        score--;
        
    }
    console.log(`de highscore is nu dus echt nog ${highscore}`);
    document.querySelector('.score').textContent= score;
    document.querySelector('.highscore').textContent = highscore;
    console.log(`de highscore is nu weer ${highscore}`);

});
document.querySelector('.number').textContent=currentNumber;

