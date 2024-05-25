import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  const grpid = request.body.grpid; 
  const userid = request.body.userid; 

  if (request.method === "POST") {
    try {
      // Execute the SQL query with the gmail parameter
      const user = await sql`
      SELECT 
    ts.id AS "ticketId",
    ts.pnr,
    ts.airline,
    ts.sector,
    ts.depflydate AS "depflyDate",
    ts.arvflydate AS "arvFlyDate",
   	ts.depflytime ,
   	ts.deplandtime,
     ts.deplanddate,
   	ts.arvflydate,
   	ts.arvflytime,
   	ts.arvlandtime,
   	ts.flightno,
   	ts.returnflightno,
   	ts.returnsector,
   	b.name,
   	b.surname,
   	b.id,
   	b.price,
   	b.title,
    b.passport,
    b.reservedate AS "reserveDate",
    b.bookingdate AS "bookingDate",
    b.status,
    b.grpid
FROM 
    bookings b
INNER JOIN 
    ticketstock ts ON b.ticketid = ts.id
WHERE  b.grpid= ${grpid} and b.userid= ${userid} and b.status = 'Confirmed'
      `;

      // Return the user data
      return response.status(200).json(user.rows);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ MESSAGE: "Method not allowed" });
  }
}
