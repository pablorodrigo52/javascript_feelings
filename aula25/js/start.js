function start(){
    let c = getTemperature();

    let k = (c + (273.15)).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"); 
    let f = ((c * (9/5)) + 32).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"); 

    document.getElementById('res').innerHTML = 
    `
    <h1> The temperature ${c}ºC its equivalent....
    <h2> ${k} ºK (KELVIN)<h2>
    <h2> ${f} ºF (fahrenheit)<h2>
    `
}

function getTemperature(){
    return Number(window.prompt("A distance in meters (m):"));
}