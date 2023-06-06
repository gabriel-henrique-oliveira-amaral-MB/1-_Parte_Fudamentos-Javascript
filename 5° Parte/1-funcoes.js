//todas as linguagens de programação utilizam funções 
// let x = "";
// console.log(x);
// x = "oi";

function imprimeTexto(texto){
    console.log(texto);
}

imprimeTexto(soma());
// imprimeTexto('outro texto');



function soma(){
    const resultado = 2 + 2;
    return resultado; 
}

// soma();
imprimeTexto(5);

// Função de callback
// Quebrar as funções torna mais fácil de dar manutenções e reaproveitar códigos que já foram feitos 
// Depois do return o restante do código não será executado