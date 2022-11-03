function convertText(val) {
    if (val==='') {
      return '';
    } else if (val[0]===val[0].toLowerCase()) {
      let arr;
      arr=val.split('');
      arr=arr.reverse();
      arr=arr.join('');
      return arr;
    } else if (val[0]===val[0].toUpperCase()) {
      return val;
    }
  }
  console.log(convertText('Hello'));
  console.log(convertText('hello'));