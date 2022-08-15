//problem 1 
let num = Number (prompt("Enter a Number"));
if(num %2 === 0 ){
    console.log("It is an Even number");
}
else{
    console.log("It is an Odd number ");
}

//problem 2

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

// problem 3
let str = prompt("Enter a string");
let reverseStr='' ;
for(let i= str.length-1 ; i >=0 ;i--){
     reverseStr += str[i];
}
console.log("The reverse string is " + reverseStr);

// problem 4 
let radius = Number(prompt("Enter the radius "));
let Area = 3.14*radius*radius;
let circumference = 2*3.14*radius;
console.log("The area of Circle is " + Area);
console.log("The circumference of Circle is " + circumference);

// problem 5 
let num1 = Number(prompt("Enter first Number"));
let num2 = Number(prompt("Enter second Number"));
let sum = num1 + num2;
if(num1 === 50 || num2 === 50 || sum === 50){
    console.log(true);
}
else {
    console.log(false);
}

//problem 6
let n1 = Number(prompt("Enter first Number"));
let n2 = Number(prompt("Enter second Number"));
if((n1 < 0 && n2 > 0) || (n1 > 0 && n2 < 0)){
    console.log(true);
}
else{
    console.log(false);
}

// problem 7 
let psNum = Number(prompt("Enter a postive Number"));
if(psNum > 0){
    if((psNum % 5 === 0) || (psNum % 8 === 0)){
        console.log (true);
    }
    else{
        console.log(false);
    }
}
else{
    console.log("Please enter postive number")
}

//problem 8 
let x = Number(prompt("first number "));
let y = Number(prompt("second number "));
let z = Number(prompt("third number "));
if(x > y && x > z){
    console.log("the largest number is " + x);
}
else if (y > x && y > z){
    console.log("the largest number is " + y);
}
else{
    console.log("the largest number is " + z);
}

//problem 9 
let total=0;
for(let i = 1 ; i<=10 ; i++){
     total += i;
}
console.log("the sum of the first 10 numbers is "+ total);

//problem 10 
let traingle = '';
for(let i = 0 ; i <= 5; i++){
    for( let j = 0; j < i; j++){
        traingle += '*';
    }
    traingle += '\n';
}
console.log(traingle);

//problem 11
let nn = Number(prompt('Enter a Number'));
if(nn >= 0 ){
    console.log('Postive Number');
}
else{
    console.log('Negative Number');
}

//problem 12 
let array =[];
let inputs;
for (let i = 0 ; i < 10 ; i++){
   
    inputs= Number(prompt('storing numbers'));
    array.push(inputs);
    console.log('element - ' +(i)+' :'+(array[i]));
}
console.log();


//problem 13 
let number1 = Number(prompt('first number'));
let number2 = Number(prompt('second number'));
let summation = number1 + number2;
console.log('the total summation is '+summation);

// problem 14 
let n = Number(prompt('Enter a number'));
let factorial = n;
if(n === 0 || n === 1){
    console.log(1);
}
for(let i = n-1 ; i > 0 ; i--){
    factorial = factorial*i;
}
console.log('The factorial of '+ n +' is: ' +factorial);

// problem 15 
let operator = prompt('Enter either + , - , * , or / :');
let operand1 = Number(prompt('Enter first Number '));
let operand2 = Number(prompt('Enter second Number '));
let res = 0;
if(operator == '+'){
    res = operand1 + operand2;
    console.log('result of the operation is: '+res);
}
else if(operator == '-'){
    res = operand1 - operand2;
    console.log('result of the operation is: '+res);
}
else if(operator == '*'){
    res = operand1*operand2;
    console.log('result of the operation is: '+res);
}
else if(operator == '/'){
    res = operand1/operand2;
    console.log('result of the operation is: '+res);
}

