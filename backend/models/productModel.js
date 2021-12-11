import { Sequelize } from "sequelize";
import db from "../config/database.js";    //memanggil confi database

const { DataTypes } = Sequelize;    //deklaraasi type untuk Squelize

//nama db, field, opsi
//squilize generate created dan update At, pada tabel harus ada field createAt dan updateAt
const Product = db.define('products', {
    title: {
        type: DataTypes.STRING     //untuk tipe string
    },
    price: {
        type: DataTypes.DOUBLE      //untuk tipe angka
    },
    stock: {
        type: DataTypes.DOUBLE      //untuk tipe angka
    },
}, {
    freezeTableName: true //harus sama dengan nama tabel di database
})

export default Product;