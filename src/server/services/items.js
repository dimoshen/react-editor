import { sql } from '@vercel/postgres';

export default async function getAll(request, response) {
  try {
    const result = await sql`SELECT * FROM items`;

    return response.status(200).json({ items: result.rows });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
