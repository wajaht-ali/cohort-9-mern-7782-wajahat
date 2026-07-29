import pg from "pg";
import config from "./config.js";

const { Pool } = pg;

export const pool = new Pool({
    user: config.USER,
    password: config.PASSWORD,
    host: config.HOST,
    port: config.DB_PORT,
    database: config.DATABASE,
});

pool.on('error', (err, client) => {
    console.error('❌ Unexpected error on idle database client', err);
});

const connectDB = async () => {
    try {
        const client = await pool.connect();

        console.log(`✅ PostgreSQL Connected`);

        client.release();
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;