function conwertText(val) {
    if (val==='') {
        return '';
    } else if (val[0]===val[0].toLowerCase()) {
        let strToSplit=val.split('');
        let strReverse=strToSplit.reverse();
        let strJoin=strReverse.join('');
        return strJoin;
    } else if (val[0]===val[0].toUpperCase()) {
        return val;
    }
}
console.log(conwertText('Hello'))
console.log('lowercase: ', (conwertText('hello')));
console.log(conwertText('hello'));