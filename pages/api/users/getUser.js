import { connectDB } from '../../../config/db'; // Import the connectDB function from db.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      const getUserByEmailQuery = `SELECT * FROM users WHERE gmail = ?`;

      const connection = await connectDB(); // Connect to MySQL

      const [rows, fields] = await connection.execute(getUserByEmailQuery, [data.gmail]);

      await connection.end(); // Close the connection

      if (rows.length > 0) {
        console.log("User found");
        res.status(200).json(rows); // Sending user data as JSON response
      } else {
        console.log("User not found");
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
