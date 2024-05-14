
import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  const ticketId = parseInt(request.query.ticketId); // Assuming id is passed as a query parameter

  if (request.method === "GET") {
    try {
      // Execute the SQL query with the id parameter
      const ticket = await sql`SELECT * FROM ticketstock WHERE id = ${ticketId}`;

      // Return the user data
      return response.status(200).json(ticket.rows);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ MESSAGE: "Method not allowed" });
  }
}
