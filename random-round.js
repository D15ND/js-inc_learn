console.log(Math.round(Math.random(0, 1)*10));
console.log(Math.random(Math.round(0, 1)*10)); // posledovatel'nost

console.log(typeof('motto'));
console.log('cat'.charAt(1));

let nameCat='cat';
console.log(nameCat[1]);

const poq='Lorem ipsum dolor sit';
console.log(poq.length);

const name12 = 'Robb';
console.log(name12.whatIsThat); // hz
console.log(name12[name12.length]);

const num1=454.123456;
console.log(num1.toFixed());
console.log(num1.toFixed(3));
console.log(num1.toFixed(5));
console.log(num1.toFixed(), num1.toFixed(3), num1.toFixed(5));

console.log(num1.toString(), typeof(num1));

const textOne='Robberto Carlo is very beautifull human.'
console.log(textOne.toLowerCase());

let strOne='ALEOT';
const strTwo='TIMBER';
console.log(strOne.toLowerCase(), strTwo.toLowerCase());

let strName1="Tim";
const strName2="Cook";
console.log(strName1.length, strName2.length);
strName1.length=100; // without changes
strName2.length=150; // without chnages
console.log(strName1.length, strName2.length);

let trName='Geonde \n'
console.log(trName.trim());

const text = 'Never forget what you are, for surely the world will not';
console.log(`First: ${text.length}`);
console.log(`Last: ${text.length-1}`);
console.log('first: ', text.length-1);

let mass=[1, 5, 7];
console.log(mass);

let qwe=145.12345;
console.log(Math.round(qwe));
console.log(Math.ceil(qwe));

let poi='     namer    ';
console.log(poi);
console.log(poi.trim());

console.log(Math.pow(3,2));

const userName1='Ioann';
console.log(userName1.length*5);
console.log(`hi, ${userName1.toUpperCase()} we are glade to see you.`);

const text14 = 'Never forget what you are, for surely the world will not';
console.log(`First: ${text14[0]}`);
console.log(`Last: ${text14[text14.length-1]}`)

const name11 = 'Tirion';
console.log(name11.length.toString());

const namelog='Triumph';
const a1=namelog.length;
console.log(a1.toString());

const text00 = 'When \t\n you play a \t\n game of thrones you win or you die.';
console.log(text00.slice(5, 15).trim().length);

// Минимальное определение функции
const noop = () => {
    // Тут мог бы быть код, но его нет
  }
  
  noop();