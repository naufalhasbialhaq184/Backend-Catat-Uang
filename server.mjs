import express from "express";
import pool from "./db.mjs";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server Berjalan")
})

// app.get('/pengeluaran', async (req, res) => {
//     try {
//         const All_Pengeluaran = await pool.query('SELECT * FROM pengeluaran ORDER BY created_at DESC');
//         res.json(All_Pengeluaran.rows);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ error: "Gagal mengambil data" })
//     }
// })

app.post('/pengeluaran', async (req, res) => {
    try {
        const { Nominal, Keterangan, Kategori } = req.body;
        await pool.query('INSERT INTO pengeluaran (Nominal, Keterangan, Kategori) VALUES ($1, $2, $3) RETURNING *', [Nominal, Keterangan, Kategori])
        res.status(201).json({ message: "Berhasil menambahkan data" })
        console.log("Berhasil menambahkan data")

    } catch (error) {
        res.status(500).json({ error: "Gagal menambahkan data" })
    }
})


app.listen(port, () => {
    console.log(`listening to ${port}`)
})