import { connectDB } from '../../../config/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      const maxIdQuery = `SELECT MAX(${data.id}) AS maxid FROM ${data.table}`;

      const connection = await connectDB(); // Connect to MySQL
      
      const [rows, fields] = await connection.execute(maxIdQuery);

      await connection.end(); // Close the connection

      if (rows.length > 0) {
        res.status(200).json(rows[0]); // Sending data as JSON response
      } else {
        console.log("Data not found");
        res.status(404).json({ error: "Data not found" });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
