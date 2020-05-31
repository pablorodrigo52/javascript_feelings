function start(){
    let name = window.prompt("Qual é o seu nome?");
    let age = window.prompt(`Olá ${name}. Qual é a sua idade?`);

    window.alert(`Acabei de conhecer ${name} que tem ${age} ${(age == 1) ? 'ano' : 'anos'} de idade.`);
}