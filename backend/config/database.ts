import pg from "pg";
import { Dialect, Options, Sequelize } from "sequelize";

const dbConfig: Options = {
    dialect: process.env.DB_DRIVER as Dialect,
};

if (process.env.DB_DRIVER === "postgres") {
    dbConfig["dialectModule"] = pg;
}

const database = new Sequelize(process.env.DB_URL!, dbConfig);

if (process.env.NODE_ENV === "development") {
    database
        .authenticate()
        .then(async () => {
            console.log("Database connection successful...");
            database.sync({ alter: true });
        })
        .catch((err) => console.log(err.message));
}

export default database;
