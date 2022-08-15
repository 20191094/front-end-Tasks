function dateDifference(d1,d2){
    
 let dat1=new Date(d1);
let dat2 = new Date(d2);
let diff = ((dat1.getTime()) - (dat2.getTime()))/(1000*3600*24); // get diffrence in milliseconds and convert these ms to days 
return diff;
}

let res = dateDifference("8/15/2021", "7/15/2021");
console.log(res);