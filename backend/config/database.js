import { Sequelize } from "sequelize";  //adalah orm untuk database sql

//nama db, username, password, opsi (host, dan jenis db)
const db = new Sequelize("mern_db", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

//export untuk es6
export default db;