import leia = require('readline-sync');

const setEst: Set<number> =  new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);
const pesquisar: number = leia.questionInt("Digite o numero que voce deseja encontrar");

if (setEst.has(pesquisar)) {
    console.log(`O número ${pesquisar} foi encontrado!`);
} else {
    console.log(`O número ${pesquisar} não foi encontrado!`)
}