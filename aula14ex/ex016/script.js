let res = document.getElementById('res')


function contar() {
    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value

    if (inicio != null && inicio != "" && fim != null && fim != "") {
        if (passo == 0) {
            alert("passo não informado, assumindo 1")
            passo = 1
        }
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        res.innerHTML = "Contando...<br>"
        if (fim > inicio) {
            for (let i = inicio; i <= fim; i = i + passo) {
                res.innerHTML += i + "&#128073"
            }
            res.innerHTML += "&#128683"
        } else {
            for (let i = inicio; i >= fim; i = i - passo) {
                res.innerHTML += i + "&#128073"
            }
            res.innerHTML += "&#128683"
        }
    } else {
        res.innerHTML = "Impossível contar..."
    }
}