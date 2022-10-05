console.log('main.js - returned console.log text');
const MAX=100;
const MIN=0;
const ATTEMPTSNUMBER=10;
const RANDOM_NUMBER=getRandomNumber();
const PLAYER_NAME=getPlayerName();

const settings={
    max: 100,
    min: 0,
    attemptsNumber: 10,
    randomNumber: getRandomNumber(),
    playerName: getPlayerName(),
}

function getRandomNumber() {
    const randomNumber=Math.round(Math.random()*100);
    console.log(randomNumber);
    return randomNumber;
}

function getPlayerName() {
    const playerName=prompt('What is ur name?', '');
    console.log(playerName);
    return playerName;
}
