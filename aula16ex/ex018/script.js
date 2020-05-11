let numeros = []

function adicionar() {
    let num = Number(document.getElementById('num').value)
    if ((num >= 0) && (num <= 100)) {
        if (!numeros.includes(num)) {
            let analisador = document.getElementById('analisador')
            numeros.push(num)
            analisador.innerHTML += `<option value='${num}'>Valor ${num} adicionado.</option>`
            document.getElementById('num').value = ""
            document.getElementById('num').focus();
        } else {
            alert('Valor já encontrado na lista.')
        }
    } else {
        alert('Valor inválido')
    }
}

function finalizar() {
    if (numeros.length > 0) {
        let res = document.getElementById('res');
        let sum = 0;
        let media = 0;
        numeros.sort();

        for (let el in numeros) {
            sum += numeros[el];
        }
        media = sum / numeros.length;
        res.innerHTML =
            `
            <label> Ao todo temos ${numeros.length} números cadastrados. </label></br></br>
            <label> O maior valor informado foi ${numeros[numeros.length-1]}.</label></br></br>
            <label> O menor valor informado foi ${numeros[0]}.</label></br></br>
            <label> Somando todos os valores, temos ${sum}.</label></br></br>
            <label> A média dos valores digitados é ${media}.</label></br></br>
        `
    } else {
        alert('Adicione valores antes de finalizar.')
    }
}