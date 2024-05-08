
import db from '../../../../config/db';

export default function handler(req, res) {
 
  if (req.method === 'POST') {
    try {
        const {status} = req.query
        const data = req.body
       
      const qry = `SELECT 
      ts.id AS ticketId,
      ts.pnr,
      ts.airline,
      ts.sector,
      ts.depflyDate,
      ts.arvFlyDate,
      SUM(CASE WHEN  DATEDIFF(YEAR,b.dob,GETDATE()) >=12 THEN 1 ELSE 0 END) AS adults,
      SUM(CASE WHEN  DATEDIFF(YEAR,b.dob,GETDATE()) <=12 and DATEDIFF(YEAR,b.dob,GETDATE()) >=2  THEN 1 ELSE 0 END) AS children,
      SUM(CASE WHEN DATEDIFF(YEAR,b.dob,GETDATE()) <=2  THEN 1 ELSE 0 END) AS infants
      ,b.reserveDate,b.bookingDate,b.status
      FROM 
      bookings b
  INNER JOIN 
      ticketStock ts ON b.ticketId = ts.id
  where b.userId =${data.id} and ts.sector ='${data.sector}' and ts.depFlyDate = 
  '${data.date}' and b.status = '${status}'
  
  GROUP BY 
      ts.id, ts.pnr, ts.airline, ts.sector,b.reserveDate,b.bookingDate, ts.depflyDate,ts.arvFlyDate,b.status`;

      db.query(qry, (err, result) => {
        if (err) {
          console.log("Error in getting data:", err);
          res.status(500).json({ error: "Internal Server Error" });
        } else {
          if (result.recordset.length > 0) {
           
            res.status(200).json(result.recordset); // Sending user data as JSON response
          } else {
            console.log("data not found");
            res.status(404).json({ error: "data not found" });
          }
        }
      });
    } catch (error) {
      console.log("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }   
}
