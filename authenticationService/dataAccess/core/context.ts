import { createConnection, Connection } from "typeorm";
import { User } from "../../domain/user";
import { Role } from "../../domain/role";
import config from "../../config";

const Context: Promise<Connection> = createConnection({
    type: "mssql",
    host:config.database.host,
    port: config.database.port,
    username: config.database.username,
    password: config.database.password,
    database: config.database.database,
    migrationsRun: false,
    entities: [
        User,
        Role,
    ],
    synchronize: false,
    logging: true
});

export default Context;