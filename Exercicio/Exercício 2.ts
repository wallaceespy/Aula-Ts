import leia = require('readline-sync');

const numeros: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]; 
const busca: number = leia.questionInt("Digite o numero que voce deseja encontrar: ");

const posicao = numeros.indexOf(busca);

if (posicao !== -1) {
    console.log(`O número ${busca} está localizado na posição: ${posicao}`);
} else {
    console.log(`O número ${busca} não foi encontrado!`);
}