import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  const ticketId = parseInt(request.query.ticketId); // Assuming id is passed as a query parameter

  if (request.method === "GET") {
    try {
      // Get the list of columns excluding 'logo'
//       const columnsResult = await sql`
//         SELECT column_name
//         FROM information_schema.columns
//         WHERE table_name = 'ticketstock' AND column_name != 'logo'
//       `;

//       // Extract the column names
//       const columns = columnsResult.rows.map(row => row.column_name).join(', ');
    
// console.log(`SELECT ${columns} FROM ticketstock WHERE id = ${ticketId}`)
//       // Construct the SQL query dynamically
//       // const query = `SELECT ${columns} FROM ticketstock WHERE id = $1`;
//       // Execute the SQL query with the id parameter
      const ticket = await sql`SELECT currentseats, date, arvlandtime, bag, handbag, purchase, sale, adminid, totalseats, resseats, bookseats, id, depflydate, depflytime, deplanddate, deplandtime, arvflydate, arvflytime, arvlanddate, tgroup, airline, sector, flightno, pnr, returnflightno, meal, givenname, sendname, returnsector FROM ticketstock WHERE id = ${ticketId}`;

      // Return the user data
      return response.status(200).json(ticket.rows);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
