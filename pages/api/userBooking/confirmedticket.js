import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  const grpid = request.body.grpid; 
  const userid = request.body.userid; 

  if (request.method === "POST") {
    try {
      // Execute the SQL query with the gmail parameter
      const user = await sql`
      select * from bookings where grpid= ${grpid} and userid= ${userid} and status = 'Confirmed'
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
