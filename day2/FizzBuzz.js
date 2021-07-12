var n=15;
for(var i=1;i<=n;i++){
    if(i%3==0 && i%5==0){
        document.write("FizzBuzz");
        document.write("\n");
    }
    else if(i%3==0){
        document.write("Fizz");
        document.write("\n");
    }
    else if(i%5==0){
        document.write("Buzz");
        document.write("\n");
    }
    else{
        document.write(i);
        document.write("\n");
    }
}