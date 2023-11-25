let a = 0, b = 1, Fibo = 50;
let temp;
document.write("Dãy số Fibonacci là: ");
for(let i = 0; i <= Fibo; i++){
    document.write("<br>" + a);
    temp = a + b;
    a = b;
    b = temp;
    
    
}