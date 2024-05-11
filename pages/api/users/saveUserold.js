import { connectDB } from '../../../config/db'; // Import the connectDB function from db.js

    export const config = {
      api: {
        bodyParser: {
          sizeLimit: '50mb',
        },
      },
    };
    
    export default async function handler(req, res) {
      const data = req.body;
    
      const insertQuery = `
        INSERT INTO users (
          role,
          hash,
          name,
          gmail,
          contact,
          address,
          co,
          logo,
          status,
          addedBy,
          date
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
      if (req.method === 'POST') {
        try {
          const connection = await connectDB(); // Connect to MySQL
    
          await connection.execute(insertQuery, [
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
            data.date
          ]);
    
          await connection.end(); // Close the connection
    
          console.log("User saved successfully");
          res.status(200).json({ message: "User saved successfully" });
        } catch (error) {
          console.error("Error:", error);
          res.status(500).json({ error: "Internal Server Error" });
        }
      } else {
        res.status(405).json({ error: "Method Not Allowed" });
      }
    }
    
  
  

// export default function handler(req, res) {
   
//     const data = req.body;
    
        
//     const insertquery = `
//         INSERT INTO users (
//             role,
//             hash,
//             name,
//             gmail,
//             contact,
//             address,
//             co,
//             logo,
//             status,
//             addedBy,
//             date
//         ) VALUES (
//             '${data.role}',
//             '${data.pwd}',
//             '${data.name}',
//             '${data.gmail}',
//             '${data.contact}',
//             '${data.address}',
//             '${data.co}',
//             '${data.logo}',
//             '${data.status}',
//             '${data.addedBy}',
//             '${data.date}'           
//         )`;
   
//     if (req.method === 'POST') {
//         try {
           
//             db.query(insertquery, (err) => {
//                 if (err) {
//                     console.log("Error in saving user:", err);
//                     res.status(500).json({ error: "Internal Server Error" });
//                 } else {
//                     console.log("User saved successfully");
//                     res.status(200).json({ message: "User saved successfully" });
//                 }
//             });
//         } catch (error) {
//             console.log("Error:", error);
//             res.status(500).json({ error: "Internal Server Error" });
//         }
//     } else {
//         res.status(405).json({ error: "Method Not Allowed" });
//     }
// }