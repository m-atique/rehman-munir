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
    const {id} = req.query
        
    const update_Qry = `update bookings set
     discount = ${data.discount} ,
     price = ${data.price},
     bookingDate = '${data.date}' ,
     payment = '${data.payment}',
     status = '${data.status}'
    where id =  '${id}'`
    
    if (req.method === 'PATCH') {
        try {
           
            db.query(update_Qry, (err) => {
                if (err) {
                    console.log("Error in Saving:", err);
                    res.status(500).json({ error: "Internal Server Error" });
                } else {
                    
                    res.status(200).json({ message: "Booking Confirmed" });
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
