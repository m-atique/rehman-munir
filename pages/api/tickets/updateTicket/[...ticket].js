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
    const {ticket} = req.query
        
    const update_Qry = `UPDATE ticketStock set 
    date = '${data.date}',       
    airline = '${data.airline}',    
    logo =  '${data.logo?data.log:""}',     
    sector = '${data.sector}',     
    pnr = '${data.pnr}',  
    flightNo = '${data.flightNo}',      
    depFlyDate = '${data.depFlyDate}', 
    depFlyTime = '${data.depFlyTime}', 
    depLandDate = '${data.depLandDate}',
    depLandTime = '${data.depLandTime}',
    arvFlyDate = '${data.arvFlyDate}', 
    arvFlytime = '${data.arvFlytime}', 
    arvLandDate = '${data.arvLandDate}',
    arvLandTime = '${data.arvLandTime}',
    bag = '${data.bag}',        
    handbag = '${data.handbag}',    
    meal = '${data.meal}',       
    purchase = '${data.purchase}',   
    sale = '${data.sale}',       
    givenName = '${data.givenName}',  
    sendName = '${data.sendName}',   
    adminId = '${data.adminId}',    
    totalSeats = '${data.totalSeats}', 
    resSeats =  '${data.resSeats?data.resSeats:""}',     
    bookSeats =  '${data.bookSeats?data.bookSeats:""}',    
    currentSeats = '${data.currentSeats?data.currentSeats:""}'   


    where id =  '${ticket}'`
    
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
