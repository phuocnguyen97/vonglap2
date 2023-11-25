for (let i = 0; i<5; i++){
    for (let j=0;j<=i;j++){
        document.write("*")
    }
    document.write("<br>")
}

document.write("<br><br>")

for (let i = 5; i>0; i--){
    for (let j=0;j<i;j++){
        document.write("*")
    }
    document.write("<br>")
}

document.write("<br><br>")

for (let i = 1; i<=5; i++){
    for (let j=0;j<=5;j++){
        if(j <= 5 - i){
            document.write('&nbsp&nbsp')
        }else{
            document.write("*")
    }
        
    }
    document.write("<br>")
}

document.write("<br><br>")

for (let i = 1; i<=5; i++){
    for (let j=0;j<=5;j++){
        if(j < i){
            document.write('&nbsp&nbsp')
        }else{
            document.write("*")
    }
        
    }
    document.write("<br>")
}