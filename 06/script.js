/*
    **Jogo de adivinhação**

    Apresente a mensagem ao usuário:
    "Adivinhe o número que estou pensando? Está entre 0 e 10"

    Crie uma lópgica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

    Enquanto o usuário não adivinhar o número, mostrar a mensagem:
    "Erro, tente novamente:"

    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! Você adivinhou o número em x tentativas"

    Substitua o "x" da mensagem, pelo número de tentativas
 */

let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10");
let xAttempts = 1;
const randomNumber = Math.round(Math.random() * 10);

while (Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente: ");
  xAttempts++;
}

if(xAttempts == 1){
    alert(`Parabéns!O número que eu pensei foi ${randomNumber} e você adivinhou o número na ${xAttempts} tentativa`);
}else{
    alert(`Parabéns!O número que eu pensei foi ${randomNumber} e você adivinhou o número em ${xAttempts} tentativas`);
}
