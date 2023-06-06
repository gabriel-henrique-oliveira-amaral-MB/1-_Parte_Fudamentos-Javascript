// Terceiro tipo de escrever função 
// Hoisting arrow function se comporta como expressão
function apresentar(nome){
    return `meu nome é ${nome}`;
}

// Os códigos da função ficam implícitos
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;


// Utilizando funções de callback
const multiplicacao = (num1, num2) => num1 * num2;

// //Função autoexecutável
// console.log(multiplicacao( soma(4,3), (() => {
//     let resultado = soma(7,8) ** 0.5;
//     return resultado.toFixed(2);
    

// })() ));

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
}