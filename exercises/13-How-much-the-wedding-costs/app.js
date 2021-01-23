let guests = parseInt(prompt('How many people are coming to your wedding?'));

function getPrice(guests){
    let cost = 0;
    // Your code here
    if(guests >=50){
        cost = 4000;
    }else if(guests >=51 && guests <=100){
        cost = 10,000
    }else if(guests >101 && guests <=200){
        cost = 15,000
    }else if(guests >=200 ){
            cost = 20,000
    }else{
        console.log("su dato es incorrecto, ingrese un nuevo dato por favor")
    }
    return cost;
}

let price = getPrice(guests);

console.log('Your wedding will cost '+price+' dollars');