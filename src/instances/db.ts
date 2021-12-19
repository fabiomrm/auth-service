import { Pool } from "pg";
import dotenv from 'dotenv';

dotenv.config();

const db = new Pool({
    connectionString: process.env.DB_CONNECTION_STR
});

export default db;
