import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const data = request.body; // Corrected: Initialize data variable
  
  if (request.method === "POST") {
    try {
      await sql
         `INSERT INTO users (
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
         ) VALUES (
             ${data.role},
             ${data.pwd},
             ${data.name},
             ${data.gmail},
             ${data.contact},
             ${data.address},
             ${data.co},
             ${data.logo},
             ${data.status},
             ${data.addedBy},
             ${data.date}
         )`;
    
      return response.status(200).json({ MESSAGE: "SAVED" }); // Corrected: "MASSAGE" changed to "MESSAGE"
    } catch (error) {
      return response.status(500).json({ error: error.message }); // Corrected: Use error.message
    }
  } else {
    return response.status(405).json({ MESSAGE: "Method not allowed" }); // Corrected: 200 changed to 405 for method error
  }
}
