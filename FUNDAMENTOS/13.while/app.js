/*
Os ciclos existem nas linguagens de programação para repetirmos a execução de acções.
Por exemplo, se quisermos um conjunto de 10 operações baseadas no mesmo algoritmo,
não é necessário repetir 10 vezes o mesmo codigo.

Se for necessario apresentar a lusta de todos os elementos de uma coleção, não será necessário
criar o codigo para apresentar cada um deles.
*/

//WHILE

while(condicao) {
    // codigo a executar
}

let numero = 1;
while(numero <= 10) {
    console.log(numero);
    numero++;
}


// Inverter apresentação

let numero = 10;
while(numero >= 1) {
    console.log(numero);
    numero--;
}

// podemos usar sem chaves se tiver apenas uma acção

let numero3 = 1;
while(numero <= 10) console.log(numero++);



// DO .... WHILE

let num = 100;
do {
    console.log(num);
    num++;
}while(num <110)


//quebrar um ciclo

let num2 = 1
do {
    console.log(num2);
    num2++;
    if(num2 > 6) break;
} while (num2 <= 10);
