import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

export default pool;

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('❌ Koneksi Neon Gagal:', err.message);
    } else {
        console.log('✅ Koneksi Neon Berhasil! Jam Server:', res.rows[0].now);
    }
});

// const pool = new Pool({
//     user: 'naufalhasbialhaq',
//     host: 'localhost',
//     database: 'ProjectCatatPengeluaran(3)',
//     password:'',
//     port: 5432
// })

// export default pool;