console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhado = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n")    //O \n é um caractere que possibilita que pulemos uma linha no momento de imprimir a mensagem.
if (idadeComprador >= 18 && temPassagemComprada)
    console.log("Boa viagem");
else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

// Identação automática: ALT+SHIFT+F