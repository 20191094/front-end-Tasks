function maxArray(arr){
    let max = 0;
    for (let i =0 ; i< arr.length ; i++){
        if(arr[i] > max ){
            max = arr[i];
        }
    }
    let index = arr.indexOf(max);
    return max ;
}
let a = [4,3,6,1,2];
console.log(maxArray(a));