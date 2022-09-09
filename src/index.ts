import { AddressInfo } from "net";
import app from "./app";
import TurmaEndpoint from "./endpoints/Turma";



const turma = new TurmaEndpoint()

app.post("/criar-turma",turma.criar)
app.get("/buscar-turmas-ativas",turma.ativa)
app.post("/mudar-modulo/:id",turma.modulo)





const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});