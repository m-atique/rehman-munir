
// import db from '../../../../config/db';

// export default function handler(req, res) {
 
//   if (req.method === 'POST') {
//     try {
     
//         const {status} = req.query
       
//       const qry = `select bk.*,u.name as agent,u.address,t.pnr,t.sector,t.airline,t.sale,t.bag,t.meal,t.depFlyDate,t.flightNo,t.depFlyTime,t.depLandTime,t.currentSeats from bookings as bk
//       inner join users as u  on  u.id = bk.userId 
//        inner join  ticketStock as t on bk.ticketId = t.id 
//        where bk.date >= '${data.startDate}'
//        and bk.date <= '${data.endDate}'
//        and  bk.status =  '${status}'`;
// console.log(qry)
//       db.query(qry, (err, result) => {
//         if (err) {
//           console.log("Error in getting data:", err);
//           res.status(500).json({ error: "Internal Server Error" });
//         } else {
//           if (result.recordset.length > 0) {
           
//             res.status(200).json(result.recordset); // Sending user data as JSON response
//           } else {
//             console.log("data not found");
//             res.status(404).json({ error: "data not found" });
//           }
//         }
//       });
//     } catch (error) {
//       console.log("Error:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   } else {
//     res.status(405).json({ error: "Method Not Allowed" });
//   }   
// }


import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  const status = request.query.status[0]; // Assuming id is passed as a query parameter
  const data = request.body
console.log("xx-----",status,data.startDate)
  console.log(`select bk.*,u.name as agent,u.address,t.pnr,t.sector,t.airline,t.sale,t.bag,t.meal,t.depflydate,t.flightno,t.depflytime,t.deplandtime,t.currentseats from bookings as bk
  inner join users as u  on  u.id = bk.userId 
   inner join  ticketStock as t on bk.ticketId = t.id 
   where bk.date >= '${data.startDate}'
   and bk.date <= '${data.endDate}'
   and  LOWER(bk.status) = LOWER(${status})`)
  if (request.method === "POST") {
    try {

      const ticket = await sql`select bk.*,u.name as agent,u.address,t.pnr,t.sector,t.airline,t.sale,t.bag,t.meal,t.depflydate,t.flightno,t.depflytime,t.deplandtime,t.currentseats from bookings as bk
      inner join users as u  on  u.id = bk.userId 
       inner join  ticketStock as t on bk.ticketId = t.id 
       where bk.date >=${data.startDate}
       and bk.date <= ${data.endDate}
       and  LOWER(bk.status) = LOWER(${status})`;

      // Return the user data
      return response.status(200).json(ticket.rows);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}


