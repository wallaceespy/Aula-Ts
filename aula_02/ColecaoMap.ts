import leia = require("readline-sync");

const participantes: Map<number, string> = new Map<number, string>();

participantes.set(1,"Ana");
participantes.set(2,"Samuel");
participantes.set(3,"Leonardo");
participantes.set(4,"Camila");

for (let [matricula, nome] of participantes){
    console.log('Matricula: ${matricula} - Nome: ${nome}')
}

//Procurar um elemento pela chave
console.log("Existe a matricula 2? ", participantes.has(2));

//Procurar um elemento pelo valor
console.log("Existe a participante Ana? ", Array.from(participantes.values()).includes("Ana"));

for(let matricula of participantes.keys()){
    console.log(matricula);
}

console.log("Qual é nome do aluno com a matricula 3?", participantes.get(3));

participantes.delete(3);

console.table(participantes);