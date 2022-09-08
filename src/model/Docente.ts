import Usuario from "./Usuario";


 class Docente extends Usuario {

    constructor( id: string,
         nome: string,
         email: string,
         data_nasc: string,
         turma_id: string,
         public especialidades: string[],
        ){
        super(id, nome, email, data_nasc, turma_id)
        this.especialidades = especialidades;     
    }


 }
 export default Docente;