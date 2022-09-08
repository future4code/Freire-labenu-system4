import { AddressInfo } from "net";
import app from "./app";
import { Turma } from "./data/Turma";

const turma1: Turma = new Turma(1, "Paulo", "Professor", "Paulo", 0)
console.log(turma1);
console.log(turma1.getId());
console.log(turma1.getNome());
console.log(turma1.getDocentes());
console.log(turma1.getEstudantes());
console.log(turma1.getModulos());

turma1.setId(2)
console.log(turma1);

turma1.setDocentes("confeiteira")
console.log(turma1);

turma1.setEstudantes("aluno de natação")
console.log(turma1);

turma1.setModulos(1)
console.log(turma1);

turma1.setNome("julia")
console.log(turma1);





const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});