//JavaScript Bouns Quiz 
 
// Q2 a - reverse string 
function reverse(str){
    let reverseStr = '';
    for(let i= str.length-1 ; i >=0 ;i--){
        reverseStr += str[i];
   }
   console.log("The reverse string is " + reverseStr);
}
let s = prompt('Enter a string ');
reverse(s);

// b- FizzBuzz
for(let i=0;i<=100;i++){
    if((i % 3 === 0) && (i % 5 === 0) ){
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

// c- recurion factorial 
function RecursionFactorial(num){
    if(num === 0 || num === 1){
        return 1;
    }
    else{
        return num *RecursionFactorial(num -1)
    }

}
console.log('The factorial of 5 is : ' +RecursionFactorial(5));