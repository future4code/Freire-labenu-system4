

export class Turma{
   private id:number
   private nome:string
   private docentes:string
   private estudantes:string
   private modulos:number

     constructor(id:number, nome:string, docentes:string, estudantes:string, modulos:number ){
        this.id = id
        this.nome = nome
        this.docentes = docentes
        this.estudantes = estudantes
        this.modulos = modulos
     }
     public getId():number{
        return this.id
    }
    public setId(novoId:number){
        this.id = novoId
    }

    public getNome():string{
        return this.nome
    }
    
    public setNome(novoNome:string){
        this.nome = novoNome
    }

    public getDocentes():string{
        return this.docentes
    }
    public setDocentes(novoDocentes:string){
        this.docentes = novoDocentes
    }

    public getEstudantes():string{
        return this.estudantes
    }
    public setEstudantes(novoEstudantes:string){
        this.estudantes = novoEstudantes
    }

    public getModulos():number{
        return this.modulos
    }
    public setModulos(novoModulos:number){
        this.modulos = novoModulos
    }
}


