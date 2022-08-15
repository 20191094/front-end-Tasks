function add(n1){
    return function (n2){
        return n1+n2;
    }
}
var a = add(2)(3);
console.log(a);