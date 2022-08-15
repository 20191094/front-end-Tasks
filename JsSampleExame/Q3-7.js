function arrReverse(arr){
 let result = [...arr].reverse(); // using spread operator to iterate on array and then reverse it using built in reverse method 
    return result;
}
let ar = [1,2,3,4];
console.log(arrReverse(ar));