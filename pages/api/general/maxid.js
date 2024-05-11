
import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
 const data = request.body

  if (request.method === "GET") {
    try {
      // Execute the SQL query 

      const lastuser = await sql`select max(id)  as maxId from users`;
      const lastticket = await sql`select max(id)  as maxId from ticketstock`;
      const lastbooking = await sql`select max(id)  as maxId from bookings`;

      // Return the user data
      return response.status(200).json(
        {
          lastuser:lastuser.rows[0].maxid,
          lastticket:lastticket.rows[0].maxid,
          lastbooking:lastbooking.rows[0].maxid,
        }
      );
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ MESSAGE: "Method not allowed" });
  }
}
