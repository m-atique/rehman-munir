import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  const data = req.body;
  const id = parseInt(req.query.id);

  if (req.method === 'PATCH') {
    try {
      // Begin transaction
      await sql`BEGIN`;

      // Update bookings with parameterized query
      await sql`
        UPDATE bookings
        SET
          canceldate = ${data.date},
          status = ${data.status}
        WHERE
          id = ${id}
      `;

      // Update ticketStock with parameterized query
      await sql`
        UPDATE ticketStock
        SET
          currentseats = ${data.seats}
        WHERE
          id = ${data.ticketid}
      `;

      // Commit transaction
      await sql`COMMIT`;

      res.status(200).json({ message: "Booking Confirmed" });
    } catch (error) {
      console.error("Error:", error);
      try {
        // Rollback transaction on error
        await sql`ROLLBACK`;
      } catch (rollbackError) {
        console.error("Rollback Error:", rollbackError);
      }
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
