
import Tarefa from "./Tarefa";

export default class ListaDeTarefas{
    protected tarefas: Array<Tarefa> = []

    adicionarTarefa(descricao: string): string{

        if (!this.tarefas.find(element => element.descricao == descricao)){
            const novaTarefa = new Tarefa(descricao);

            this.tarefas.push(novaTarefa);

            return '\n - Tarefa adicionada'
            
        }else{
            return "Tarefa ja existe"
        }
        
    }

    deletarTarefa(descricao: string): string{
        if(this.tarefas.length > 0){
            const index = this.tarefas.findIndex(element => element.descricao == descricao);
            if(index >= 0){
                this.tarefas.splice(index, 1);
                return `Tarefa (${descricao}) removida com sucesso`
            }else{
                return `Tarefa não encontrada`
            }
            
        }else{
            return "Não existem tarefas"
        }
    }

    listarTarefas(condicao?: boolean, status?: string){

        if(condicao){
            if(status == "concluidas"){
                console.log('Listando tarefas concluidas')
                const resultado = this.tarefas.filter(element => element.getStatus())
                console.table(resultado)
            }else{
                console.log('Listando tarefas não concluidas')
                const resultado = this.tarefas.filter(element => !element.getStatus())
                console.table(resultado)
            }
        }else{
            console.log("\n - Lista de Tarefas: \n")
       
            console.table(this.tarefas)
        }
        
    }


    editarTarefa(descricao: string, status: boolean, novaDescricao?: string): string{
        const index = this.tarefas.findIndex(element => element.descricao == descricao)

        if (index >= 0){
            if(status) this.tarefas[index].marcarConcluida();
            if (novaDescricao) this.tarefas[index].descricao = novaDescricao;

            return "Edição realizada"
        }else{
            return "Tarefa não encontrada"
        }
    }
}