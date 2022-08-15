
let display = document.getElementById('display');

let btn = Array.from(document.getElementsByClassName('button'));

//loop over all the buttons and add eventlistener
btn.forEach(button => {
    button.addEventListener('click' , calc);
});

// function to run the calculator
function calc(){
    let btnText= this.innerText;
    if(btnText === 'AC'){
        display.innerText = '';
        return; // to delete the AC from the display after clicking on it 
    }
    if(btnText === '='){
        display.innerText = eval(display.innerText); 
    }
    else{
        display.innerText += btnText;
        return;
    }
}
