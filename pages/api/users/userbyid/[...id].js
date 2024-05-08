import { connectDB } from '../../../../config/db'; // Import the connectDB function from db.js

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;
      const userId = parseInt(id, 10); 
      console.log("user", id);

      const getUserByIdQuery = `SELECT * FROM users WHERE id = ?`;

      const connection = await connectDB(); // Connect to MySQL

      const [rows, fields] = await connection.execute(getUserByIdQuery, [userId]);

      await connection.end(); // Close the connection

      if (rows.length > 0) {
        res.status(200).json(rows); // Sending user data as JSON response
      } else {
        console.log("data not found");
        res.status(404).json({ error: "data not found" });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
