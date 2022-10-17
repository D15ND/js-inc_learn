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