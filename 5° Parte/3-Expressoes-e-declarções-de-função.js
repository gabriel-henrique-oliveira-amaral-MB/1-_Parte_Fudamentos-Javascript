// // declaração de função

// function minhaFuncao(param) {
//     // bloco de código
// }

// minhaFuncao("param")

// expressão de função

const soma = function (num1, num2) { return num1 + num2 };

// console.log(soma(1,2));

// diferença principal: HOISTING



function apresentar() {
    return "olá";
}

console.log(apresentar());
console.log(apresentar);



// Nessa expressão a função se comporta como uma variável sendo essa a causa do erro

// console.log(apresentar());
// const apresentar = function(){ return "Olá"; };
// console.log(apresentar())