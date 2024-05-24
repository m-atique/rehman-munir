import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  const status = request.query.status[0]; // Assuming id is passed as a query parameter
  const data = request.body

 
  if (request.method === "POST") {
    try {
       
      const ticket = await sql`SELECT 
      ts.id AS "ticketId",
      ts.pnr,
      ts.airline,
      ts.sector,
      ts.depflydate AS "depflyDate",
      ts.arvflydate AS "arvFlyDate",
      SUM(CASE WHEN EXTRACT(YEAR FROM AGE(b.dob)) >= 12 THEN 1 ELSE 0 END) AS adults,
      SUM(CASE WHEN EXTRACT(YEAR FROM AGE(b.dob)) BETWEEN 2 AND 12 THEN 1 ELSE 0 END) AS children,
      SUM(CASE WHEN EXTRACT(YEAR FROM AGE(b.dob)) < 2 THEN 1 ELSE 0 END) AS infants,
      b.reservedate AS "reserveDate",
      b.bookingdate AS "bookingDate",
      b.status,b.groupid
  FROM 
      bookings b
  INNER JOIN 
      ticketstock ts ON b.ticketid = ts.id
  WHERE 
      b.userid = ${data.id}
      AND ts.sector = ${data.sector} 
      AND ts.depflydate = ${data.date} 
      AND LOWER(b.status) = LOWER(${status})
  GROUP BY 
      ts.id, ts.pnr, ts.airline, ts.sector, ts.depflydate, ts.arvflydate, b.reservedate, b.bookingdate, b.status,b.groupid;`;

      return response.status(200).json(ticket.rows);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
