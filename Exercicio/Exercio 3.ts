import leia = require('readline-sync');

const setNumeros: Set<number> = new Set<number>();

console.log("Digite 10 valores inteiros não repetidos:");

while (setNumeros.size < 10) {
    const num = leia.questionInt(`Valor ${setNumeros.size + 1}: `);
    setNumeros.add(num);
}

console.log("\nListar dados do Set:"); 
setNumeros.forEach(n => console.log(n));