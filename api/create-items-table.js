import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS items (
        id serial PRIMARY KEY,
        tool varchar(255) CHECK (tool IN ('headline', 'image', 'paragraph', 'button'))
      );
    `;
    await sql`
      INSERT INTO items (tool) VALUES ('headline'), ('image'), ('paragraph'), ('button');
    `;


    const result = await sql`SELECT * FROM items`;

    return response.status(200).json({ items: result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
