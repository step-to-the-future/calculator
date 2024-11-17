
function clicking(){
  const fuck = document.querySelector('.Subscribe');

if(fuck.innerText === "Subscribe"){
    fuck.innerHTML = 'Subscribed';
}else{
    fuck.innerHTML = 'Subscribe';
}
};

function calculate(){
    const puck = document.querySelector('.number');
    const evaEl = document.querySelector('.display');
      
    if(puck.innerHTML === "1"){
        evaEl.innerHTML += '1';
    } 
}

function calculate2(){
    const puck = document.querySelector('.number2');
    const evaEl = document.querySelector('.display');

    if(puck.innerHTML === "2"){
        evaEl.innerHTML += '2';
    } 

    if(evaEl.innerHTML.length > 7){
        evaEl.innerHTML = evaEl.innerHTML.slice(0, 7);
    }
}

function calculate3(){
    const puck = document.querySelector('.number3');
    const evaEl = document.querySelector('.display');

    if(puck.innerHTML === "3"){
        evaEl.innerHTML += '3';
    } 
}

function calculate4(){
    const huck = document.querySelector('.number4');
    const evaEl = document.querySelector('.display');

    if(huck.innerHTML === "4"){
        evaEl.innerHTML += '4';
    } 
}

function calculate5(){
    const huck = document.querySelector('.number5');
    const evaEl = document.querySelector('.display');

    if(huck.innerHTML == '+'){
        evaEl.innerHTML += '+';
    } 
};


function calculate6(){
    const huck = document.querySelector('.number6');
    const evaEl = document.querySelector('.display');

    if(huck.innerHTML === "5"){
        evaEl.innerHTML += '5';
    } 
}

function calculate7(){
    const huck = document.querySelector('.number7');
    const evaEl = document.querySelector('.display');

    if(huck.innerHTML === "6"){
        evaEl.innerHTML += '6';
    } 
}

function calculate8(){
    const huck = document.querySelector('.number8');
    const evaEl = document.querySelector('.display');

    if(huck.innerHTML === "7"){
        evaEl.innerHTML += '7';
    } 
}


function calculate9(){
    const huck = document.querySelector('.number9');
    const evaEl = document.querySelector('.display');

    if(huck.innerHTML === "8"){
        evaEl.innerHTML += '8';
    } 
}


function calculate10(){
    const huck = document.querySelector('.number10');
    const evaEl = document.querySelector('.display');

    if(huck.innerHTML === "-"){
        evaEl.innerHTML += '-';
    } 
}


function calculate11(){
    const huck = document.querySelector('.number11');
    const evaEl = document.querySelector('.display');

    if(huck.innerHTML === "9"){
        evaEl.innerHTML += '9';
    } 
}


function calculate12(){
    const huck = document.querySelector('.number12');
    const evaEl = document.querySelector('.display');

    if(huck.innerHTML === "10"){
        evaEl.innerHTML += '10';
    } 
}


function calculate13(){
    const huck = document.querySelector('.number13');
    const evaEl = document.querySelector('.display');

    if(huck.innerHTML === "/"){
        evaEl.innerHTML += '/';
    } 
}


function calculate14(){
    const huck = document.querySelector('.number14');
    const evaEl = document.querySelector('.display');

    if(huck.innerHTML === "*"){
        evaEl.innerHTML += '*';
    } 
}

function calculate15(){
    const huck = document.querySelector('.number15');
    const evaEl = document.querySelector('.display');

    if(huck.innerHTML === "Clear"){
        evaEl.innerHTML = '';
    } 
}

function calculate16(){
    const huck = document.querySelector('.number16');
    const evaEl = document.querySelector('.display');

    if(huck.innerHTML === "="){
       evaEl.innerHTML = eval(evaEl.innerHTML);
    }
}
