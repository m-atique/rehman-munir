
      import { sql } from '@vercel/postgres';

      export default async function handler(request, response) {
      
      
        if (request.method === "GET") {
          try {
            // Execute the SQL query with the gmail parameter
            const sector = await sql`select distinct sector  from ticketStock where sector is not null `;
      
            // Return the sector data
            return response.status(200).json(sector.rows);
          } catch (error) {
            return response.status(500).json({ error: error.message });
          }
        } else {
          return response.status(405).json({ MESSAGE: "Method not allowed" });
        }
      }