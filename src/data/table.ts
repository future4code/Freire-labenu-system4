 import { connection } from "./connection"
 const printError = (error: any) => { console.log(error.sqlMessage || error.message) }


// const createTables = () => connection.raw(`
//  CREATE TABLE Turma(
//          id INT PRIMARY KEY,
//          nome VARCHAR(255) NOT NULL,
//          docentes VARCHAR(255) NOT NULL,
//          estudantes VARCHAR(255) NOT NULL,
//          modulos VARCHAR(255) NOT NULL

// );`).then(() => { console.log("Tabela criada") })
//     .catch(printError)

// const closeConnection = () => { connection.destroy() }
// createTables()
//     .then(() => console.log("Banco pronto!"))
//     .finally(closeConnection)

//     const createTable1 = () => connection.raw(`
//  CREATE TABLE Turma1(
//          id INT PRIMARY KEY,
//          nome VARCHAR(255) NOT NULL,
//          docentes VARCHAR(255) NOT NULL,
//          estudantes VARCHAR(255) NOT NULL,
//          modulos VARCHAR(255) NOT NULL

// );`)
//     .then(() => { console.log("Tabela criada") })
//     .catch(printError)

// const closeConnection1 = () => { connection.destroy() }
// createTables()
//     .then(() => console.log("Banco pronto!"))
//     .finally(closeConnection1)