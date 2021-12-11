const port = 3001;
import express from "express";
import db from "./config/database.js";
import productRoute from "./route/index.js";

//agar dapat diakses fronted perlu menggunakan cors = cross origin resourse sharing
import cors from "cors";

//menggunakan express
const app = express();

//cek koneksi database
try {
    await db.authenticate();
    console.log("Database terkoneksi.");
} catch (err) {
    console.log("Database tidak terkoneksi. ", err);
}

//menggunakan cors agar API dapat digunakan untuk frontend
app.use(cors());

//midleware untuk menangkap req.body ketika ada param yang dikirim
app.use(express.json());  

//route root untuk mengakses API endpoint
app.use("/products", productRoute);

//membuat server pada port {port}
app.listen(port, ()=> { console.log(`Server berjalan di : http://localhost:${port}`)});
