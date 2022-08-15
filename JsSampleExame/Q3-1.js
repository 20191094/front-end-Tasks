function sumObjectValues(obj){
    let sum =0;
    for (let i in obj){
        if(obj.hasOwnProperty(i)){
            sum += Number(obj[i]);
        }
    }
    return sum;
}
let ob = {a:1, b:2 , c:3 , d:4};
let result = sumObjectValues(ob);
console.log(result);

