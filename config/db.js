// const sql = require('mssql')
// require('dotenv').config();



// const config = {
//     user:"sa",
//     password:"123456Pwd" ,
//     server:"localhost",
//     database:'rehmanmunir',
//     port:1433,
  
//    options: {
//         trustedconnection: true,
//         trustServerCertificate: true
//     },
   
// }
// async function connectDB(){
//     try {
//          sql.connect(config)
//         console.log('connected to SQL')
//     } catch (error) {
//         console.log(error)
//     }
// }

// connectDB()

// module.exports = sql




const mysql = require('mysql2/promise'); // Import mysql2 library
require('dotenv').config();

// const config = {
//     host: "localhost", // MySQL host
//     user: "root", // MySQL username
//     database: "rehmanmunir", // MySQL database name
//     port: 3306, // MySQL port (default is 3306)
// };


const config = {
    host: "localhost", // MySQL host
    user: "root", // MySQL username
    database: "rehmanmunir", // MySQL database name
    
    port: 3306, // MySQL port (default is 3306)
};

async function connectDB() {
    try {
        const connection = await mysql.createConnection(config); // Create connection
        console.log('Connected to MySQL');
        return connection;
    } catch (error) {
        console.error('Error connecting to MySQL:', error);
        throw error;
    }
}

module.exports = { connectDB };
