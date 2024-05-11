import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  const user = parseInt(request.query.user); // Assuming id is passed as a query parameter
  const data = request.body;

  if (request.method === "PATCH") {
    try {
      // Execute the SQL query with parameterized values
      await sql`
        UPDATE users SET
          role = ${data.role},
          hash = ${data.pwd},
          name = ${data.name},
          gmail = ${data.gmail},
          contact = ${data.contact},
          address = ${data.address},
          co = ${data.co},
          logo = ${data.logo},
          status = ${data.status},
          addedBy = ${data.addedBy},
          date = ${data.date}
        WHERE id = ${user}
      `;

      // Return a success response
      return response.status(200).json({ message: "User updated successfully" });
    } catch (error) {
      // Handle errors
      return response.status(500).json({ error: error.message });
    }
  } else {
    // Handle invalid HTTP method
    return response.status(405).json({ MESSAGE: "Method not allowed" });
  }
}
