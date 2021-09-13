function convert(){
    let a = Number(document.getElementById('inputmoney').value);
    let b = Number(document.getElementById('tocuren').value);
    let c = a / b;
    document.getElementById('ketqua').innerHTML = c;

}