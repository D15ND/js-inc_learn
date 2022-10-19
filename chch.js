const checkAge=(age) => age<1;
if (checkAge===false) {
    console.log('age is more then 1 year');
} else {
    console.log('Rigth, age is little then 1 year');
}
console.log(checkAge(2));