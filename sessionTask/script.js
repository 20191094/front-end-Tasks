//Model A
//function string as paramter return the largest word in string 

function LargestString(str){
    let word = str.split(' ');
    let large='';
    for(let i =0; i<word.length;i++){
        if(word[i].length > large.length){
            large = word[i];
        }
    }
    return large;
}
console.log(LargestString("Welcome to Angular"));