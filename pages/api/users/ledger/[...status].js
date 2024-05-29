
import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  const status = request.query.status[0]; // Assuming id is passed as a query parameter
  const data = request.body

 
  if (request.method === "POST") {
    try {

      const ticket = await sql`select bk.*,u.name as agent,u.address,t.pnr,t.sector,t.airline,t.depflydate,t.flightno,t.depflytime,SUM(bk.price) OVER (ORDER BY bk.id) AS running_total from bookings as bk
      inner join users as u  on  u.id = bk.userId 
       inner join  ticketStock as t on bk.ticketId = t.id 
       where bk.date >=${data.startDate}
       and bk.date <= ${data.endDate}
       and  LOWER(bk.status) = LOWER('Confirmed') 
       and u.id = ${data.userid} 
       `;

      // Return the user data
      return response.status(200).json(ticket.rows);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}


