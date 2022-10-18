//creditcard
const getHiddenCard=(cardNum, sybolNum) => {
    if (sybolNum===undefined) {
        return ('*'.repeat(4)+(cardNum.slice(12,16)));
    } else {
    return ('*'.repeat(sybolNum)+(cardNum.slice(12,16)));
    }
}
console.log(getHiddenCard('1234567812345678'));
console.log(getHiddenCard('1234567812345678', 3));
console.log(getHiddenCard('1234567812345678'));
console.log(getHiddenCard('2034399002121100', 1));