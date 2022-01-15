// OPERADORES DE COMPARAÇÃO

/*
Já conhecemos operadores de comparação de matemática
Maior que, menor que, maior ou igaul a, etc.

Vamos apreder a comparar valores e perceber o seu resultado.
*/

// IMPORTANTE: todas as comparações retornam um boleano
// true - verdadeiro - correto
// false - FontFaceSetLoadEvent, incorreto


console.log()


console.log(10 > 20); // false
console.log(10 < 20); // true
console.log(20 > 20); // false
console.log(20 >= 20); // false
console.log(20 < 20); // false
console.log(20 <= 20); // true

console.log(20 == 20); // true
console.log(10 == 20); // false
console.log(10 != 20); // true
console.log(20 != 20); // false

// Comparação de strings - comparação de caracteres de forma sequencial

console.log("joao" == "joao"); //true
console.log("joao" != "joao"); //false
console.log("ana" == "joao"); // false

console.log("joao" > "joao"); // false
console.log("toao" > "joao") // true  
console.log("anabela" > "joao") // false  
console.log("z" > "j") // true

/* STRICT EQUALITY

A verificação de igualdade de dois valores tem um problema:
Não diferencia o 0 do false
*/

0 == false; //true
"" == false; //true

/* com o == os operandos sao convertidos para numeros */

/* strict equality operator === não faz essa cinversao */

0 === false; // false
"" === false; // false

null == undefined; //false
null === undefined; //true

/* noutras omparações (> < >= <= ) null = 0 e undefined = NaN */
