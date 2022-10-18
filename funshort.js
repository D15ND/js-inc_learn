const sum=(a,b) => {
    return a+b;
}
console.log('sum is:', sum(3,5));

const sum2=(x,y) => {
    return x+y;
}
console.log('sum2:', sum2(3.5, 4));
console.log('round sum2:', Math.round(sum2(3.5, 4)));


myString = '129' 
myNumber=parseInt(myString);
console.log(parseInt(myString));
console.log(typeof(myNumber));

let textFirst='ttee';
let result;
console.log(textFirst[0], textFirst[1], textFirst[2], textFirst[3]);
if ((textFirst[0]===textFirst[1]) && (textFirst[2]===textFirst[3])){
    result=true;
}
else {
    result=false;
}
console.log(result);

let randomStr='aLOFERo';
console.log(randomStr.slice(1, -1));

let randomSymbol='I';
let x1=randomSymbol*5;
console.log(x1);
console.log('x'+'x');


let qwe='one-';
let n=5;
console.log(qwe+qwe);

console.log(qwe.repeat(n)); //repeat string n-times;

// const fun1=(example) => qwe.repeat(n);

console.log('google'.replace('go', 'mo')); //change letters
let ya='yandex';
console.log(ya.replace('ya', 'da')); //change too with let

console.log(ya[ya.length-1]); // last letter

console.log(ya.slice(0, n));

const pow12=(n,p) => {
    return n**p;
}
console.log(pow12(3,2));

const pow13=(n,p) => {
    return Math.pow(n,p);
}
console.log(pow13(4,2));

// let cardNum='1234567812345678';
// console.log(cardNum.slice(12,16));

//creditcard
const getHiddenCard=(cardNum, sybolNum) => {
    return ('*'.repeat(sybolNum)+(cardNum.slice(12,16)));
}
console.log(getHiddenCard('1234567812345678', 1));