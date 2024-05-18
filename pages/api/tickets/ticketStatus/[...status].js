
    
    import { sql } from '@vercel/postgres';

    export default async function handler(request, response) {
      const status = parseInt(request.query.status); // Assuming id is passed as a query parameter
      const data = request.body;
    
      if (request.method === "PATCH") {
        try {
          // Execute the SQL query with parameterized values
          await sql`UPDATE ticketStock set 
          currentSeats = ${data.currentSeats?data.currentSeats:null}   
          where id =  ${status}`;
    
          // Return a success response
          return response.status(200).json({ message: "Updated successfully" });
        } catch (error) {
          // Handle errors
          return response.status(500).json({ error: error.message });
        }
      } else {
        // Handle invalid HTTP method
        return response.status(405).json({ MESSAGE: "Method not allowed" });
      }
    }
    
