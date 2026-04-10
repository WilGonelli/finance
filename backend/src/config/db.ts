import { Pool } from "pg";

const USER = process.env.POSTGRES_USER || "postgres";
const PASSWORD = process.env.POSTGRES_PASSWORD || "postgres";
const DATABASE = process.env.POSTGRES_DB || "finance";

const pool = new Pool({
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  host: "localhost",
  port: 5432,
});

export const db_connection = pool;
