

export default class Tarefa {

    descricao: string
    private concluida: boolean = false
    prioridade?: string;

    constructor(text: string){
        this.descricao = text
    }

    getStatus (): boolean{
        return this.concluida
    }
    
    marcarPendente():string{
        this.concluida = false;
        return "Status alterado para Pendente"
    }

    marcarConcluida():string{
        this.concluida = true;
        return "Status alterado para Concluída"
    }

    toString(): string{
        let status = "Pendente"
        if(this.concluida) status="Concluída";
        return("\n" + `Tarefa ${status}` + "\n-" + this.descricao + "\n")
    }
}