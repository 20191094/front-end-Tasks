//JavaScript Exam 
// Q1 number 2 
let  Num1 = 3, Num2 = 2 ;
Num1 = Num1*Num2;  // num1=6
Num2 = Num1/Num2; // num2 = 3
Num1= Num1/ Num2  // num1 = 2
console.log(Num1);
console.log(Num2);

// Q1 number 3 
let str = 'Javascript';
for(let i = 0 ; i < str.length ; i++){
console.log(str[i]); 
}


//Q3 number 1 
//append and prepend to array 
function addingToarray(){
    let arr =[4,5,6]; 
    // prepend to the array 
    arr.unshift(1,2,3);
    // append to the array 
    arr.push(7,8,9);
    return arr;

}
console.log(addingToarray());

// Q3 number 2 
// convert abject to array 
function convert(Ob){ 
    let arr = Object.entries(obj);
    return arr;
};
let obj={
    a : 1,
    b : 2,
};
console.log( convert(obj));

//Q3 number 4 
// find min in array 
let Arr=[1,3,4,0,7];
let min = Math.min.apply(null,Arr);
let index = Arr.indexOf(min);
console.log('the minimum number is : ' + min);
console.log('the index if minimum number is : ' + index);

function minArray(arr){
    let min = 100000;
    for (let i =0 ; i< arr.length ; i++){
        if(arr[i] < min ){
            min = arr[i];
        }
    }
    let index = arr.indexOf(min);
    return min ;
}
let a = [4,3,6,1,2];
console.log(minArray(a));

//Q3 number 5
// factorial of 5 
function findFactorial(num){
    let factorial = num ;
    if(num === 0 || num === 1){
        console.log(1);
    }
    for(let i = num-1 ; i > 0 ; i--){
        factorial = factorial*i;
    }
    console.log('The factorial of '+ num +' is: ' +factorial);

}
findFactorial(5);

// Q3 number 6 
// function to return multiple values either by array or object
function MultibleValues(){
    let x = 1 , y=2 , z=3;
    return [x,y,z];
}
let b = MultibleValues();
console.log(b);

function manyValues(){
    let x = 1 , y=2 , z=3;
    return {x,y,z};
}
let m = manyValues();
let nn = m.x , mm = m.z;
console.log(nn , mm);