import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password:'327563778887_'
})

await client.connect()

export async function getAll() {
  const result = await client.query(`
    SELECT *
    FROM items
  `);
  
  return result.rows;
}
 