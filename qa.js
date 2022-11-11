function reversive(val) {
    let revName=val.split('').reverse().join('').toLowerCase();
    let uppLetter=revName[0].toUpperCase()+revName.slice(1);
    console.log(uppLetter); // alert
}
reversive('Hello');