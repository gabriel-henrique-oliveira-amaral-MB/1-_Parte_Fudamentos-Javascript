// Javascript gera conversões implicitas que são caracteristica dos ==  e não dos === (conversão explicita)
let numeroString = '123';
let numero = 123;

// console.log(numero + Number(numeroString));
console.log(String(numero) + numeroString);

// Temos que saber as peculiaridades de cada linguagem interpretada ou compilada.

//Dica de boas práticas: Apesar do JavaScript fazer a maioria das conversões de forma correta, problemas podem aparecer, então é sempre bom fazer as conversões de forma explícita. 
//Não é comum usar o operador de soma para fazer a conversão para números, mas este uso é possível. Conversões de booleanos não costumam ser muito usados, mas são possíveis.

//Já aprendemos a declarar variáveis, sejam elas let ou const, utilizando a palavra-chave e um nome que escolhemos para a variável
//Chamamos este nome justamente de identificador, e o ideal é que sejam sempre o mais explicativos possível:

//Teste para ver que o JavaScript não consegue reconhecer estas palavras-chave como identificadores e nem interpretar o que deve ser executado nestas linhas. 
//Isso acontece porque var, if e const são palavras reservadas do JavaScript. Ou seja, não podemos usá-las para dar nomes (identificar) variáveis, funções ou outros blocos de código que precisem de identificadores.

// Por outro lado, os exemplos abaixo são aceitáveis:
// let varInicial = 0;
// let ifFalse = 0;
// let constDeTexto = "Manoel Batista";


// arguments
// as
// async
// await
// break
// case
// catch
// class
// const
// continue
// debugger
// default
// delete
// do
// else
// eval
// export
// extends
// false
// finally
// for
// from
// function
// get
// if
// import
// in
// instanceof
// let
// of
// new
// null
// return
// set
// static
// super
// switch
// target
// this
// throw
// true
// try
// typeof
// var
// void
// while
// with
// yield
// Como as linguagens estão em constante desenvolvimento, o JavaScript também restringe o uso de mais algumas palavras que podem ser utilizadas nas próximas versões:

// enum
// implements
// interface
// package
// private
// protected
// public

// Dica de boas práticas: sempre procure nomear/identificar seu código da forma mais semântica possível, pensando em qual é o dado que está sendo salvo na variável e
// para que ele será utilizado. Além de evitar palavras reservadas, faz com que o código fique mais compreensível e de leitura mais fluida.