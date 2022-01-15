// INSTRUÇÕES CONDICIONAIS / CONDITIONAL BRANCHING (RAMIFICAÇÃO)

// IF statement e ? operator

// IF statement

/*
if(condição) {
    ...
}
*/

let valor_a = 10;
let valor_b = 20;

if(valor_a < valor_b) {
    console.log("OK")
}

if(valor_a > valor_b) console.log("OK!!!!!!"); // ALTERNATIVA SE ESTIVER APENAS 1 CONDIÇÃO

// ELSE

if(condicao) {
    // codigo da condição for verdadeira
} else{
    // codigo se condicao for falsa
}

// ELSE IF

if(condicao1) {
    // codigo se condicao1 for verdadeira
} else if(condicao2) {
    // codigo se condicao1 for verdadeira
}  else if(condicao3) {
    // codigo se condicao2 for verdadeira
} else {
    // codigo se qualquer condição for falsa
}


//CONDITIONAL OPERATOR

let nome = "joao";
let verificacao = nome == "joao" ? "sim" : "nao";
console.log("O utilizador está autorizado? "  + verificacao);


