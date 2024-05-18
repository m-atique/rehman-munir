 
      import { sql } from '@vercel/postgres';

      export default async function handler(request, response) {
        const gmail = request.body.gmail; 
      
        if (request.method === "GET") {
          try {
            // Execute the SQL query with the gmail parameter
            const ticket = await sql
            `select *  from ticketStock where currentseats >0`
            ;
      
            // Return the user data
            return response.status(200).json(ticket.rows);
          } catch (error) {
            return response.status(500).json({ error: error.message });
          }
        } else {
          return response.status(405).json({ MESSAGE: "Method not allowed" });
        }
      }
      