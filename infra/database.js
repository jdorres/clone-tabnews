import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "local_password",
  database: "postgres",
});

async function query(queryObject) {
  const result = await pool.query(queryObject);
  return result;
}

export default {
  query,
};
