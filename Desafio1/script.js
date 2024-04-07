let numberOne = Number(prompt("Qual o primeiro número: "));
let numberTwo = Number(prompt("Qual o segundo número: "));

function checkOddEven(number1, number2) {
  let check = (number1 + number2) % 2 == 0;

  if (check) {
    return `A soma dos números é par`;
  } else {
    return `A soma dos números é Ímpar`;
  }
}
function checkSimilarNumber(number1, number2) {
  let check = number1 == number2;

  if (check) {
    return `Os números inseridos são iguais`;
  } else {
    return `Os números inseridos são diferentes`;
  }
}

let checkingSimilarNumber = checkSimilarNumber(numberOne, numberTwo);
let checkingOddEven = checkOddEven(numberOne, numberTwo);

alert(`A soma dos dois números é: ${numberOne + numberTwo}`);
alert(`A subtração dos dois números é: ${numberOne - numberTwo}`);
alert(`A multiplicação dos dois números é: ${numberOne * numberTwo}`);
alert(`A divisão dos dois números é: ${numberOne / numberTwo}`);
alert(`A resto da divisão dos dois números é: ${numberOne % numberTwo}`);
alert(checkingOddEven);
alert(checkingSimilarNumber);
