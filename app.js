
alert('Boas vindas ao jogo do número secreto!');

let numero_maximo = 50
let numero_secreto = parseInt(Math.random() * numero_maximo + 1);
let chute;
let tentativas = 1;


while(chute != numero_secreto){
    chute = prompt(`Escolha um número entre 1 e ${numero_maximo}.`);
    if (chute == numero_secreto){
        break
    }
    else{
        if(chute > numero_secreto){
            alert(`O número secreto é menor que ${chute}`);
        }
        else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

palavra_tentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(
    `Isso aí, você descobriu o número secreto: (${numero_secreto}) com ${tentativas} ${palavra_tentativa}`
)

/*

if (tentativas > 1){
    alert(`Isso aí, você descobriu o número secreto: (${numero_secreto}) com ${tentativas} tentativas`);
}
else{
    alert(`Isso aí, você descobriu o número secreto: (${numero_secreto}) com ${tentativas} tentativa`);
}

*/
