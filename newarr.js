function conwertText(val) {
    if (val==='') {
        return '';
    } else if (val[0]===val[0].toLowerCase()) {
        let arr;
        let arrToReverse;
        let arrToString;
        arr=val.split('');
        arrToReverse=arr.reverse();
        arrToString=arrToReverse.join('');
        return arrToString;
    } else if (val[0]===val[0].toUpperCase()) {
        return val;
    }
}

console.log(conwertText('hello'));
console.log(conwertText('Hello'));