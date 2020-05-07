function gerar() {
    let num = Number(document.getElementById('num').value);
    let tabuada = document.getElementById('tabuada');
    let opt = ``;
    for (let i = 1; i <= 10; i++) {
        opt += `<option value="${num*i}">${num} * ${i} = ${num*i}</option>`
    }
    tabuada.innerHTML = opt;
}