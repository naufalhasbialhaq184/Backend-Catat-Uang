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

// const pool = new Pool({
//     user: 'naufalhasbialhaq',
//     host: 'localhost',
//     database: 'ProjectCatatPengeluaran(3)',
//     password:'',
//     port: 5432
// })

// export default pool;