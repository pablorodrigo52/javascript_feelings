let res = document.getElementById('res');


function contar() {
    let inicio = Number(document.getElementById('inicio').value);
    let fim = Number(document.getElementById('fim').value);
    let passo = Number(document.getElementById('passo').value);

    if (inicio > 0) {
        if (fim > 0) {
            if (passo == 0) {
                alert("passo não informado, assumindo 1");
                passo = 1;
            }
            res.innerHTML = "Contando...<br>"
            for (let i = inicio; i <= fim; i = i + passo) {
                res.innerHTML += i + "&#128073";
            }
            res.innerHTML += "&#128683";
        } else {
            res.innerHTML = "Não posso contar pra trás..."
        }
    } else {
        res.innerHTML = "Impossível contar..."
    }
}