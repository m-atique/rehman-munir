import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const data = request.body; // Corrected: Initialize data variable
  
  if (request.method === "POST") {
    try {
      await sql`Insert into bookings 
    (
    
    date,       
    userId,    
    ticketId, 
    title,      
    name,     
    surName,  
    dob,      
    passport, 
    expiry, 
    status  
    )
    values
    ( 
       
        ${data.date},         
        ${data.userId},      
        ${data.ticketId}, 
        ${data.title},         
        ${data.name},       
        ${data.surName},   
        ${data.dob},       
        ${data.passport},   
        ${data.expiry},   
        'Reserved' 
            
    )`;
    
    return response.status(200).json({ MESSAGE: "SAVED" }); // Corrected: "MASSAGE" changed to "MESSAGE"
  } catch (error) {
    return response.status(500).json({ error: error.message }); // Corrected: Use error.message
  }
} else {
  return response.status(405).json({ MESSAGE: "Method not allowed" }); // Corrected: 200 changed to 405 for method error
}
}
