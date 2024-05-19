import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  const status = request.query.status[0]; // Assuming id is passed as a query parameter
console.log("status",status)
  if (request.method === "GET") {
    try {

      const ticket = await sql`select bk.*,u.name as agent,u.address,t.pnr,t.sector,t.airline,t.sale,t.bag,t.meal,t.depflydate,t.flightNo,t.depflytime,t.deplandtime,t.currentSeats from bookings as bk
      inner join users as u  on  u.id = bk.userid 
       inner join  ticketstock as t on bk.ticketid = t.id WHERE LOWER(bk.status) = LOWER(${status})`;

      // Return the user data
      return response.status(200).json(ticket.rows);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}

