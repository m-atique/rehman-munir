import db from '../../../config/db';

export default function handler(req, res) {
 
  if (req.method === 'POST') {
    try {
      const data = req.body;
      const maxid = `select MAX(${data.id}) as maxid from ${data.table} `;

      db.query(maxid, (err, result) => {
        if (err) {
          console.log("Error in getting data:", err);
          res.status(500).json({ error: "Internal Server Error" });
        } else {
          if (result.recordset.length > 0) {
           
            res.status(200).json(result.recordset[0]); // Sending user data as JSON response
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
