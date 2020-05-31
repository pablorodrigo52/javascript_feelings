function start(){
    let product = getProduct();
    let price = getPrice(product);
    
    if (price != 0){
        if (price > 1){
            let payment = getPayment();
            while (payment < price){
                window.alert('Its not suficient.');
                payment = getPayment();
            }
            window.alert(`You buy ${product}.\nActually costs $ ${price} and your change is $ ${(payment - price).toFixed(2)}.`);
        } else {
            window.alert('Sorry, we need some pay our bills.');
        }
    } else {
        window.alert('Sorry, we need some pay our bills.');
    }
}

function getProduct(){
    return window.prompt("Wich product are you buying?");
}

function getPrice(product){
    return Number(window.prompt(`The price of ${product}?`));
}

function getPayment(){
    return Number(window.prompt(`Your payment? (How much)`));
}