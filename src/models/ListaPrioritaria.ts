import ListaDeTarefas from "./ListaDeTarefas";
import Tarefa from "./Tarefa";

export default class ListaPrioritaria extends ListaDeTarefas{
    
    adicionarTarefaPrioritaria(descricao: string, prioridade: string): string {
        const tarefa = new Tarefa(descricao);
        tarefa.prioridade = prioridade;
        let index;

        switch(prioridade)
        {
            case "Alta":
                index = this.tarefas.findIndex(element => (element.prioridade == "Média")||(element.prioridade == "Baixa"));
                if(index>=0){
                    this.tarefas.splice(index, 0, tarefa);
                }else{
                    this.tarefas.push(tarefa);
                }
                break;
            case "Média":
                index = this.tarefas.findIndex(element => element.prioridade == "Baixa");
                if(index>=0){
                    this.tarefas.splice(index, 0, tarefa);
                }else{
                    this.tarefas.push(tarefa);
                }
                break;
            default:
                this.tarefas.push(tarefa);
                break;

        }

        return "Tarefa Prioritaria adicionada"
    }
    
}