const sql = require('mssql')
require('dotenv').config();



const config = {
    user:"sa",
    password:"123456Pwd" ,
    server:"localhost",
    database:'rehmanmunir',
    port:1433,
  
   options: {
        trustedconnection: true,
        trustServerCertificate: true
    },
   
}
async function connectDB(){
    try {
         sql.connect(config)
        console.log('connected to SQL')
    } catch (error) {
        console.log(error)
    }
}

connectDB()

module.exports = sql