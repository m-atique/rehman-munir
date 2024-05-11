
import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  const table = request.body.table;
  const id = request.body.id 

  if (request.method === "POST") {
    try {
      // Execute the SQL query 
      const ids = await sql`SELECT MAX(${id}) AS maxid FROM ${table}`;

      // Return the user data
      return response.status(200).json(ids.rows);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ MESSAGE: "Method not allowed" });
  }
}
