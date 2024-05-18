

 
import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  const data = request.body 

  if (request.method === "POST") {
    try {
      console.log( `select * from ticketStock where tgroup = ${data.group}  and sector = ${data.sector}`
    )
      // Execute the SQL query with the gmail parameter
      const ticket = await sql
      `select * from ticketStock where tgroup = ${data.group} OR tgroup = ${data.group.toLowerCase()}`
      ;

      // Return the tickets data
      return response.status(200).json(ticket.rows);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ MESSAGE: "Method not allowed" });
  }
}
