console.clear();

// string é um tipo de valor que necessita ser definido com aspas
// existem 3 tipos de aspas: aspas duplas, simples e backtiks (acento grave)

let valor1 = "texto";
let valor2 = 'texto';
let valor3 = `texto`;
let a = `exemplo de backtiks`

// nos primeiros dois casos, são tudo semelhantes
// no terceiro caso sao consideradas aspas com funcionalidades vejamos:

let nome = "avelino";
console.log(`Bom dia, ${nome}`);
console.log(`O resultado de 10 + 20 é de ${10 + 20}`);

// a expressoa de $ {.....} é avaliada e transformada em resultado
// é conhecida como interpolação de strings ou template string
// os dois primeiros exemplos não ten esta funcionalide

// veremos operações com strings mais à frente
// não existe um tipo de valor caracter unico