function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'homem_b.jpeg')
            } else if (idade < 21) {
                img.setAttribute('src', 'homem_j.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem_a.jpg')
            } else {
                img.setAttribute('src', 'homem_i.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'mulher_b.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher_j.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher_a.jpg')
            } else {
                img.setAttribute('src', 'mulher_i.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}