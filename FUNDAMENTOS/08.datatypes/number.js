console.clear();

// Number - permite interieors (integer) e valor com casas decimasi (float)

let numero1 = 100;
let numero2 = -100;
let numero3 = 12.75;

// podemos fazer operações com numeros (adição, multiplicação, etc)
// alem dos valores numeros existem 3 outros valores especiais
// Infinity, -Infinity e NaN

// Infinity - valor equivalente ao infinitivo matemático. É maior do que qualquer numero 
// pode ser obtido como resultado de uma divisao por zero.

console.log(6/2);
console.log(6/0);
console.log(-6/0);

// NaN - è um erro de computação. Resulta de tentativa de executar uma operação matemática
// inválido, como por exemplo dividir um texto por um numero.

console.log("texto"/2);

// por exemplo NaN não mais vai ser alterado. Por exemplo NaN +1 nunca mais vai ser 1

/*
let valor = "texto";
let resultado = valor / 2;
console.log(resultado);
console.log(resultado + 1);
*/

// e neste caso?

let valor = "100";
let resultado = valor / 2;
console.log(resultado);

