function convertText(val) {
    if (val==='') {
        return '';
    } else if (val===val[0].toLowerCase()) {
        return val;
    } else if (val===val[0].toUpperCase()) {
        let arr1=val.split('');
        let revEx=arr1.reverse();
        let resultEx=revEx.join('');
        return resultEx;
    }
}
console.log(convertText('Hello'));
