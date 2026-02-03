import leia = require("readline-sync");
import Queue = require("../aula_02/Queue");


const fila = new Queue<string>();
let opcao: number;

do {
    console.log("\n*****************************************************");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");
    console.log("*****************************************************");

    opcao = leia.questionInt("Entre com a opcao desejada: ");

    switch (opcao) {
        case 1:
            const nome = leia.question("Digite o nome: ");
            fila.enqueue(nome); // 
            console.log("\nFila:");
            fila.printQueue(); // Exibe a lista atual 
            console.log("\nCliente Adicionado!"); // Mensagem após a lista 
            break;

        case 2:
            if (fila.isEmpty()) {
                console.log("\nA Fila está vazia!"); 
            } else {
                console.log("\nLista de Clientes na Fila:");
                fila.printQueue(); // 
            }
            break;

        case 3:
            if (fila.isEmpty()) {
                console.log("\nA Fila está vazia!"); 
            } else {
                fila.dequeue(); // Remove o primeiro da fila 
                console.log("\nFila:");
                fila.printQueue();
                console.log("\nO Cliente foi Chamado!");
            }
            break;

        case 0:
            console.log("\nPrograma Finalizado!"); 
            break;

        default:
            console.log("\nOpção inválida!");
    }
} while (opcao !== 0);