import { connectDB } from '../../config/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const connection = await connectDB(); // Connect to MySQL

      // If connection is successful, send a success response
      res.status(200).json({ message: 'Database connection successful' });

      // Close the connection
      await connection.end();
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
