import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  const ticket = parseInt(request.query.ticket); // Assuming id is passed as a query parameter
  const data = request.body;

  if (request.method === "PATCH") {
    try {
      // Execute the SQL query with parameterized values
      await sql`
        UPDATE ticketstock SET
        tgroup = ${data.group},
        date = ${data.date},
        airline = ${data.airline},
        logo = ${data.logo ? data.logo : ""},
        sector = ${data.sector},
        pnr = ${data.pnr},
        flightNo = ${data.flightNo},
        depFlyDate = ${data.depFlyDate},
        depFlyTime = ${data.depFlyTime},
        depLandDate = ${data.depLandDate},
        depLandTime = ${data.depLandTime},
        returnSector = ${data.returnSector},
        returnFlightNo = ${data.returnFlightNo},
        arvFlyDate = ${data.arvFlyDate},
        arvFlytime = ${data.arvFlytime},
        arvLandDate = ${data.arvLandDate},
        arvLandTime = ${data.arvLandTime},
        bag = ${data.bag},
        handbag = ${data.handbag},
        meal = ${data.meal},
        purchase = ${data.purchase},
        sale = ${data.sale},
        givenName = ${data.givenName},
        sendName = ${data.sendName},
        adminId = ${data.adminId},
        totalSeats = ${data.totalSeats}
        WHERE id = ${ticket}
      `;

      // Return a success response
      return response.status(200).json({ message: "Updated successfully" });
    } catch (error) {
      // Handle errors
      return response.status(500).json({ error: error.message });
    }
  } else {
    // Handle invalid HTTP method
    return response.status(405).json({ MESSAGE: "Method not allowed" });
  }
}
