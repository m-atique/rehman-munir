import db from '../../../../config/db';


export const config = {
    api: {
      bodyParser: {
        sizeLimit: '50mb',
      },
    },
  
  }
  
export default function handler(req, res) {
    const data = req.body;
    const {status} = req.query
        
    const update_Qry = `UPDATE ticketStock set 
    currentSeats = '${data.currentSeats?data.currentSeats:""}'   


    where id =  '${status}'`
    
    if (req.method === 'PATCH') {
        try {
          
            db.query(update_Qry, (err) => {
                if (err) {
                    console.log("Error in Updating:", err);
                    res.status(500).json({ error: "Internal Server Error" });
                } else {
                    console.log(" Updating successfully");
                    res.status(200).json({ message: " Updated successfully" });
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
