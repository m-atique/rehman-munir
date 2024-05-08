import { connectDB } from '../../../../config/db'; // Import the connectDB function from db.js

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '50mb',
      },
    },
};

export default async function handler(req, res) {
    const data = req.body;
    const { user } = req.query;
    const userId = parseInt(user, 10); 
        
    const updateQuery = `UPDATE users SET 
        role = ?,
        hash = ?,
        name = ?,
        gmail = ?,
        contact = ?,
        address = ?,
        co = ?,
        logo = ?,
        status = ?,
        addedBy = ?,
        date = ?
        WHERE id = ?`;

    if (req.method === 'PATCH') {
        try {
            const connection = await connectDB(); // Connect to MySQL
            
            await connection.execute(updateQuery, [
                data.role,
                data.pwd,
                data.name,
                data.gmail,
                data.contact,
                data.address,
                data.co,
                data.logo,
                data.status,
                data.addedBy,
                data.date,
                userId // Pass user parameter as the last parameter
            ]);

            await connection.end(); // Close the connection

            console.log("User updated successfully");
            res.status(200).json({ message: "User updated successfully" });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
