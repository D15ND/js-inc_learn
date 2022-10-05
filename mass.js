let mass_1=[
    'zero',
    'one',
    'two',
    'three'
];
console.log(mass_1);
console.log(mass_1.length);
console.log(mass_1[0], mass_1[1], mass_1[2], mass_1[3]);


let mass_2=[
    'ZERO',
    'ONE',
    'TWO',
    'THREE',
    'FOUR'
];
console.log(mass_2);
console.log(mass_2.length);
console.log(mass_2[mass_2.length-1]); // last massiv 
mass_2.push('add_last_word_from_push');
console.log(mass_2.length, mass_2);
mass_2.unshift('add_first_word_from_unshift');
console.log(mass_2.length, mass_2);


let mass_3=[
    'Alphaca',
    'Byson',
    'Caplya',
    'Dinosavr',
    'Eagle'
];
console.log(mass_3);
mass_3.pop();
console.log(mass_3);
mass_3.shift();
console.log(mass_3);
mass_3[10]='for_empty_string';
console.log(mass_3);


let mass_4=[];
mass_4[0]='human';
mass_4[1]='animal';
mass_4[2]='bird';
mass_4[3]='fish';
console.log(mass_4);


let mass_5=[75, 'oval', 'krug', ['second_mass1', 'second_mass2'], 62, 'finish'];
console.log(mass_5);
console.log(mass_5[1]);
console.log(mass_5[2]);



