// CILCO FOR

/* o ciclo for é um dos ciclos mais utilizados em programação
*/

for(inicio; condicao; step){
    acoes
}

//exemplo

for(let numero = 1; numero <=10; numero++){
    console.log(numero);
}


// podemos escrever o cilo for de varias formas

let numero1 = 1;
for(;numero1 <=10; numero1++ ){
    console.log(numero1)
}

// +1 exemplo

let numero3 = 1;
for(;numero3 <=10;){
    console.log(numero3++)
}


//intercalando no loop

for(let numero4 = 1; numero4 <= 10; numero4++){
    if(numero4 ==5) continue;
    console.log(numero4)
}


// saltar fora do loop

for(let numero5 = 1; numero5 <= 10; numero5++){
    console.log(numero5)
    if(numero5 ==5) break;
}


// loops anunhados

for(let valor1 = 1; valor1 <= 4; valor1++){
    for(let valor2 = 1; valor2 <=3; valor2++){
        if(valor1 * valor == 6);
        console.log(`${valor1} x ${valor2} = ${valor1 * valor2}`)
    }
}

// sair de um loop aninhado com labels

ciclo: for(let valor1 = 1; valor1 <= 4; valor1++){
    for(let valor2 = 1; valor2 <=3; valor2++){
        if(valor1 * valor2 == 6) break ciclo;
        console.log(`${valor1} x ${valor2} = ${valor1 * valor2}`)
    }
}
console.log('terminado')
