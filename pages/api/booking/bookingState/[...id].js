import { sql } from '@vercel/postgres';


export default async function handler(req, res) {
  const data = req.body;
  const id = parseInt(req.query.id);

  // const update_Qry = `
  //   UPDATE bookings SET
  //     discount = ${data.discount},
  //     price = ${data.price},
  //     bookingDate = ${data.date},
  //     payment = ${data.payment},
  //     status = ${data.status}
  //     WHERE id = ${id}
  // `;

  if (req.method === 'PATCH') {
    try {
      // Execute the SQL query
      await sql`
      UPDATE bookings SET
        discount = ${data.discount},
        price = ${data.price},
        bookingdate = ${data.date},
        payment = ${data.payment},
        status = ${data.status}
        WHERE id = ${id}
    `;

      // Respond with success message
      res.status(200).json({ message: "Booking Confirmed" });
    } catch (error) {
      // Handle errors
      console.log("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Handle invalid method
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
