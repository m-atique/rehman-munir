
import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  const id = parseInt(request.query.id); // Assuming id is passed as a query parameter

  if (request.method === "GET") {
    try {
      // Execute the SQL query with the id parameter
      const user = await sql`
        SELECT * FROM users WHERE id = ${id}
      `;

      // Return the user data
      return response.status(200).json(user.rows[0]);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ MESSAGE: "Method not allowed" });
  }
}
