import db from '../../../config/db';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      const getuserById = `select * from users where gmail = '${data.gmail}'`;

      db.query(getuserById, (err, result) => {
        if (err) {
          console.log("Error in getting user:", err);
          res.status(500).json({ error: "Internal Server Error" });
        } else {
          if (result.recordset.length > 0) {
            console.log("User found");
            res.status(200).json(result.recordset); // Sending user data as JSON response
          } else {
            console.log("User not found");
            res.status(404).json({ error: "User not found" });
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
