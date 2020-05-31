let dolarcotation = window.prompt('Dólar cotation');

function start(){
    let real = getMoney();

    let converted = (real/dolarcotation).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");  

    document.getElementById('res').innerHTML = 
    `
    <h2> Actually you have <span>US$ ${converted}</span></h2>
    `
}

function getMoney(){
    return Number(window.prompt("How much?(R$)"));
}