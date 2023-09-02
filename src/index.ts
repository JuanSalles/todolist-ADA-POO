import ListaDeTarefas from "./models/ListaDeTarefas";
import ListaPrioritaria from "./models/ListaPrioritaria";
import Tarefa from "./models/Tarefa"


console.log("Todo List - Poo - Modulo-3 - Santander Coders 2023.1\n\n")

const novaTarefa = new Tarefa("Fazer a atividade de Poo");

console.log(novaTarefa.toString());

console.log(novaTarefa.marcarConcluida());

console.log(novaTarefa.toString());

const novaListaDeTarefas = new ListaDeTarefas();

novaListaDeTarefas.adicionarTarefa('Limpar a casa');
console.log(novaListaDeTarefas.adicionarTarefa('Limpar a casa'));
novaListaDeTarefas.adicionarTarefa('Estudar TypeScript');
novaListaDeTarefas.adicionarTarefa('Estudar Inglês');
novaListaDeTarefas.adicionarTarefa('Jantar com a namorada');
novaListaDeTarefas.adicionarTarefa('Comprar um chuveiro novo');
novaListaDeTarefas.adicionarTarefa('Arrumar o guarda roupa');

novaListaDeTarefas.listarTarefas();

novaListaDeTarefas.editarTarefa('Limpar a casa', true);
novaListaDeTarefas.editarTarefa('Estudar TypeScript', true);
console.log(novaListaDeTarefas.editarTarefa('Arrumar o guarda roupa', true, 'Arrumar a cozinha'));
console.log(novaListaDeTarefas.editarTarefa('qualquer texto', true));

novaListaDeTarefas.listarTarefas();

console.log(novaListaDeTarefas.deletarTarefa('Comprar um chuveiro novo'));

novaListaDeTarefas.listarTarefas();

novaListaDeTarefas.listarTarefas(true, "concluidas");

novaListaDeTarefas.listarTarefas(true, "não concluidas");

const novaListaDeTarefasPriori = new ListaPrioritaria();

novaListaDeTarefasPriori.adicionarTarefaPrioritaria('Limpar a casa', "Baixa");
novaListaDeTarefasPriori.adicionarTarefaPrioritaria('Estudar TypeScript', "Alta");
novaListaDeTarefasPriori.adicionarTarefaPrioritaria('Estudar Inglês', "Média");
novaListaDeTarefasPriori.adicionarTarefaPrioritaria('Jantar com a namorada', "Média");
novaListaDeTarefasPriori.adicionarTarefaPrioritaria('Comprar um chuveiro novo', "Alta");
novaListaDeTarefasPriori.adicionarTarefaPrioritaria('Arrumar o guarda roupa', "Baixa");

novaListaDeTarefasPriori.listarTarefas();

novaListaDeTarefasPriori.editarTarefa('Limpar a casa', true);
novaListaDeTarefasPriori.editarTarefa('Estudar TypeScript', true);
console.log(novaListaDeTarefasPriori.editarTarefa('Arrumar o guarda roupa', true, 'Arrumar a cozinha'));
console.log(novaListaDeTarefasPriori.editarTarefa('qualquer texto', true));

novaListaDeTarefasPriori.listarTarefas();

console.log(novaListaDeTarefasPriori.deletarTarefa('Comprar um chuveiro novo'));

novaListaDeTarefasPriori.listarTarefas();

novaListaDeTarefasPriori.listarTarefas(true, "concluidas");