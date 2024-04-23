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
    const {user} = req.query
        
    const update_Qry = `UPDATE users set 
    role = '${data.role}',
    hash = '${data.pwd}',
    name = '${data.name}',
    gmail = '${data.gmail}',
    contact = '${data.contact}',
    address = '${data.address}',
    co = '${data.co}',
    logo = '${data.logo}',
    status = '${data.status}',
    addedBy = '${data.addedBy}',
    date = '${data.date}'


    where id =  '${user}'`
    
    if (req.method === 'PATCH') {
        try {
           
            db.query(update_Qry, (err) => {
                if (err) {
                    console.log("Error in Updating user:", err);
                    res.status(500).json({ error: "Internal Server Error" });
                } else {
                    console.log("User Updating successfully");
                    res.status(200).json({ message: "User Updated successfully" });
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
