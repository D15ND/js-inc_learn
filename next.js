let userName='Alex';
console.log(userName);
userName[0]='B';
console.log(userName);

let login='Evgeny';
console.log(login);
login='Ivgeny';
console.log(login);

const one = 'Naharis';
const two = 'Mormont';
const three = 'Sand';
console.log(one[2]);
console.log(two[1]);
console.log(three[3]);
console.log(two[4]);
console.log(two[2]);
console.log(one[2], two[1], three[3], two[4], two[2]);

let x1='1'
let y1='6';
let xy=(x1+y1);
console.log(xy);
console.log(typeof(xy));

let x2=1;
let y2='4';
let x2y2=(x2+y2);
console.log(x2y2);
console.log(typeof(x2y2));

let str1='one'+'two';
console.log(str1);
let num1='1'+'42';
console.log(num1);
let num2='4'*'7';
console.log(num2);
let str2='one'*'two';
console.log(str2);

console.log(Math.pow(3,2)); // **
let eq=+(3,5); // 3+5
console.log(eq);

const result1 = Math.round(10.25, 1);
console.log(result1);

const r1=(14.12345);
console.log(r1.toFixed(2)); // оругление до n-запятой
console.log(r1.toFixed(5));

let list=[14, 22, 17];
var min = function(list){
    console.log(min);
    return Math.min(list);
    console.log('minimal value is:', min);
}
var max = function(list){
    return Math.max(list);
    console.log('maximum value is:', max);
}
console.log(Math.)