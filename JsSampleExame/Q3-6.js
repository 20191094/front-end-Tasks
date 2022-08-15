//using arrays 
function MultibleValues(){
    let x = 1 , y=2 , z=3;
    return [x,y,z];
}
let b = MultibleValues();
console.log('array output ' +(b));
//another way using object
function manyValues(){
    let x = 1 , y=2 , z=3;
    return {x,y,z};
}
let m = manyValues();
let nn = m.x , mm = m.z;
console.log('object output '+ nn , mm);