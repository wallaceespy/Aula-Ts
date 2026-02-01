import leia = require('readline-sync');

const cores: string[] = [];

for (let i = 0; i < 5; i++) {
    const cor = leia.question(`Digite a cor ${i + 1}: `);
    cores.push(cor); 
}

console.log("\nListar todas as cores:");
cores.forEach(c => console.log(c)); 

console.log("\nOrdenar as cores:");
const coresOrdenadas = [...cores].sort(); 
coresOrdenadas.forEach(c => console.log(c));