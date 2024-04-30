import db from "../../../config/db";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "50mb",
    },
  },
};

export default function handler(req, res) {
  const data = req.body;

  const insert_qury = `Insert into bookings 
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
       
        '${data.date}',         
        '${data.userId}',      
        '${data.ticketId}', 
        '${data.title}',         
        '${data.name}',       
        '${data.surName}',   
        '${data.dob}',       
        '${data.passport}',   
        '${data.expiry}',   
        'Reserved' 
            
    )`;

  if (req.method === "POST") {
    console.log("qry",insert_qury)
    try {
      db.query(insert_qury, (err) => {
        if (err) {
          
          res.status(500).json({ error: "Internal Server Error" });
        } else {
          console.log("Ticket Booked successfully");
          res.status(200).json({ message: "Ticket Booked  successfully" });
        }
      });
    } catch (error) {
      console.log("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
