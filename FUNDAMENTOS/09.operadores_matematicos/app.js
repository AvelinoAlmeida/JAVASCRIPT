// OPERADORES MATEMATICOS

/*
Para quem não está no ramo de programação, os operadores matematicos 
sao muito semelhantes aos operadores matematicos que apredndemos na escola
quando aprendemos a adição, multiplicação e divisao.

Estes sinais operadores permitem executar operações matematicas com numbers 
no entanto existem muitos detalhes que nao aprendemos na escola,
*/

/*
Conceios (por curiosidade)
10 + 20
o 10 e o 20 são designados por operandos
o sinal de + é o operador
*/

/* 
Os operadores podem ser unários ou binários
são unários quando fazem parte de uma operação que tem apenas um operando
*/

let valor1 = 10;
valor1 = -valor1; //-10

/*
são binarios quando fazem parte de uma operação com mais de um operando
*/

let valor2 = 10, valor3 = 20;
let resultado = valor2 + valor3;

/*
O mesmo simbolo tem resultados distintos em cada uma das operações.
*/

//______________________________________________________________________

/* OPERADORES MATEMATICOS BÁSICOS

a + b // adição
a - b // subtração
a * b // multiplicação
a / b // divisão
*/

/*
% é o restante ou resto de uma divisão (tambem conhecido por modulo)

7/2 = 3.5
7 % 2 = 1

O operador % vai devolver o resto de uma divisão
*/

/*
Exponenciação / Potenciação
*/

a ** b

10**2 // 100

/*
Concatenação de Strings
Embora não pareça relacionado com operadores matemáticos, há alguns aspectos a ter em conta.
*/

let nome = "avelino"
let apelido = "almeida"

let nome_completo = nome + " " + apelido; // avelino almeida

"1" + 2 //12
2 + "1" //21
"2" + 1 + 3 //213
1 + 3 + "2" //42

6 - '2' //4

/*
Conversão numerica - utilização de operadores unário (um sinal e um operador)
*/

let x = 1;
+x; //1

let y = -10
+y; //10


/*
Conversão de boleanos para numeros
*/

+true //1
+false //0

/*
Converter strings para numeros
*/

let valor_a = "10";
let valor_b = "20";

+valor_a + +valor_b //30
Number(valor_a) + Number(valor_b) //30









