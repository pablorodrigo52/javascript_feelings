function start(){
    let m = getDistance();

    while (m < 0){
        window.alert('Please, inform a valid distance...');
        m = getDistance();
    }
    let km =    (m / 1000).toFixed(3).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    let hm =    (m / 100).toFixed(3).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    let dam =   (m / 10).toFixed(3).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    let dm =    (m * 10).toFixed(3).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    let cm =    (m * 100).toFixed(3).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    let mm =    (m * 1000).toFixed(3).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

    document.getElementById('res').innerHTML = 
    `
    <h1> The distance ${m} m its equivalent....
    <h2> ${km} KM <h2>
    <h2> ${hm} HM <h2>
    <h2> ${dam} DAM <h2>
    <h2> ${dm} DM <h2>
    <h2> ${cm} CM <h2>
    <h2> ${mm} MM <h2>
    `
}

function getDistance(){
    return Number(window.prompt("A distance in meters (m):"));
}