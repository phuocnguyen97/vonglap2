let a = parseInt(prompt("Nhập vào số nguyên dương để tính giai thừa: "));
let giaiThua = 1;

if( a == 0 || a == 1){
    // alert("Giai thừa = 1");
    giaiThua = 1;
} else if(a < 0){
    alert("Sai");
} else{
    for(let i = 1; i <= a; i++){
        giaiThua = giaiThua * i
    }
}
document.write(`Giai thừa của ${a} = ${giaiThua}`);
