function convertText(val) {
    if (val==='') {
    return '';
    } else if (val===val[0].toUpperCase()) {
    return val;
    } else if (val===val[0].toLowerCase()) {
    return reverse(val);
    }
}
console.log(convertText('Hello'));

let t1='Open';
let arr1=t1.split('');
let resultArr=arr1.reverse();
let resultStr=resultArr.join('');
console.log(resultArr);
console.log(resultStr);