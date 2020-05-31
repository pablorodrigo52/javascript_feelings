
function start(){
    let int = Number(window.prompt("Input any integer."));

    if (Number.isInteger(int)){
        window.alert(`Before ${int} we have ${int-1}.\nAfter ${int} we have ${int+1}.`);
    } else {
        window.alert('This is not a integer');
        start();
    }
}