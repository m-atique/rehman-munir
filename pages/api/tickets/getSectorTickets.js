import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  const data = request.body;

  if (request.method === "POST") {
    try {
    

      // Execute the parameterized SQL query
      const ticket = await sql`
        SELECT * FROM ticketStock WHERE LOWER(sector) = LOWER(${data.sector})
      `;

      // Return the tickets data
      return response.status(200).json(ticket.rows);
    } catch (error) {
      // Handle any errors
      return response.status(500).json({ error: error.message });
    }
  } else {
    // Handle non-POST requests
    return response.status(405).json({ message: "Method not allowed" });
  }
}
