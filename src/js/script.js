function data(value){
    calculator.dispaly.value += value;
}

function ac(){
    calculator.dispaly.value= " ";
}

function c(){
    calculator.dispaly.value=calculator.dispaly.value.slice(0,-1);
}

function equal(){
    calculator.dispaly.value=eval(calculator.dispaly.value);
}