import { AddressInfo } from "net";
import dotenv from "dotenv";
import knex, { Knex } from "knex";

dotenv.config();

export class connection{
    static destroy() {
        throw new Error("Method not implemented.");
    }
    static raw(arg0: string) {
        throw new Error("Method not implemented.");
    }
    private connection: Knex | null = null

    protected getConnection(){
        if(!this.connection){
            this.connection = knex({
                client: "mysql",
            })
        }
        return this.connection
    }
}
