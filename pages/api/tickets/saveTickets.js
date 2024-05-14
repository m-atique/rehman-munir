// import { connectDB } from "../../../config/db";

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: "50mb",
//     },
//   },
// };

// export default async function handler(req, res) {
//   const data = req.body;

//   const insertQuery = `INSERT INTO ticketStock 
//     (
//     tgroup,
//     date,       
//     airline,    
//     logo,       
//     sector,     
//     pnr,  
//     flightNo,      
//     depFlyDate, 
//     depFlyTime, 
//     depLandDate,
//     depLandTime,
//     returnSector,
//     returnFlightNo,
//     arvFlyDate, 
//     arvFlytime, 
//     arvLandDate,
//     arvLandTime,
//     bag,        
//     handbag,    
//     meal,       
//     purchase,   
//     sale,       
//     givenName,  
//     sendName,   
//     adminId,    
//     totalSeats, 
//     resSeats,   
//     bookSeats,  
//     currentSeats   
//     )
//     VALUES
//     (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//   if (req.method === "POST") {
//     try {

//       console.log("qry---",insertQuery)
//       const connection = await connectDB(); // Connect to MySQL

//       await connection.execute(insertQuery, [
//         data.group,
//         data.date,
//         data.airline,
//         data.logo ? data.logo : "",
//         data.sector,
//         data.pnr,
//         data.flightNo,
//         data.depFlyDate,
//         data.depFlyTime,
//         data.depLandDate,
//         data.depLandTime,
//         data.returnSector,
//         data.returnFlightNo,
//         data.arvFlyDate,
//         data.arvFlytime,
//         data.arvLandDate,
//         data.arvLandTime,
//         data.bag,
//         data.handbag,
//         data.meal,
//         data.purchase,
//         data.sale,
//         data.givenName,
//         data.sendName,
//         data.adminId,
//         data.totalSeats,
//         data.resSeats ? data.resSeats : "",
//         data.bookSeats ? data.bookSeats : "",
//         data.currentSeats ? data.currentSeats : "",
//       ]);

//       await connection.end(); // Close the connection

//       console.log("Tickets saved successfully");
//       res.status(200).json({ message: "Tickets saved successfully" });
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
  const data = request.body; // Corrected: Initialize data variable
  
  if (request.method === "POST") {
    try {
      await sql
      `INSERT INTO ticketStock 
      (
      tgroup,
      date,       
      airline,    
      logo,       
      sector,     
      pnr,  
      flightNo,      
      depFlyDate, 
      depFlyTime, 
      depLandDate,
      depLandTime,
      returnSector,
      returnFlightNo,
      arvFlyDate, 
      arvFlytime, 
      arvLandDate,
      arvLandTime,
      bag,        
      handbag,    
      meal,       
      purchase,   
      sale,       
      givenName,  
      sendName,   
      adminId,    
      totalSeats, 
      resSeats,   
      bookSeats,  
      currentSeats   
      )
      VALUES
      (
${data.group},
${data.date},
${data.airline},
${data.logo ? data.logo : ""},
${data.sector},
${data.pnr},
${data.flightNo},
${data.depFlyDate},
${data.depFlyTime},
${data.depLandDate},
${data.depLandTime},
${data.returnSector},
${data.returnFlightNo},
${data.arvFlyDate},
${data.arvFlytime},
${data.arvLandDate},
${data.arvLandTime},
${data.bag},
${data.handbag},
${data.meal},
${data.purchase},
${data.sale},
${data.givenName},
${data.sendName},
${data.adminId},
${data.totalSeats},
${data.resSeats ? data.resSeats : null},
${data.bookSeats ? data.bookSeats : null},
${data.currentSeats ? data.currentSeats : null}
      )`;
    
      return response.status(200).json({ MESSAGE: "SAVED" }); // Corrected: "MASSAGE" changed to "MESSAGE"
    } catch (error) {
      return response.status(500).json({ error: error.message }); // Corrected: Use error.message
    }
  } else {
    return response.status(405).json({ MESSAGE: "Method not allowed" }); // Corrected: 200 changed to 405 for method error
  }
}
