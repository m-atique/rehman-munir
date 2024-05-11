// // const sql = require('mssql')
// // require('dotenv').config();



// // const config = {
// //     user:"sa",
// //     password:"123456Pwd" ,
// //     server:"localhost",
// //     database:'rehmanmunir',
// //     port:1433,
  
// //    options: {
// //         trustedconnection: true,
// //         trustServerCertificate: true
// //     },
   
// // }
// // async function connectDB(){
// //     try {
// //          sql.connect(config)
// //         console.log('connected to SQL')
// //     } catch (error) {
// //         console.log(error)
// //     }
// // }

// // connectDB()

// // module.exports = sql




// // const mysql = require('mysql2/promise'); // Import mysql2 library
// // require('dotenv').config();

// // // const config = {
// // //     host: "localhost", // MySQL host
// // //     user: "root", // MySQL username
// // //     database: "rehmanmunir", // MySQL database name
// // //     port: 3306, // MySQL port (default is 3306)
// // // };


// // const config = {
// //     host: "server86.web-hosting.com", // MySQL host
// //     user: "rehmeqzv_rehmanmunir", // MySQL username
// //     database: "rehmeqzv_rehmanmunir", // MySQL database name
// //     password:"Rmunir@1234",
// //     port: 3306, // MySQL port (default is 3306)
// // };

// // async function connectDB() {
// //     try {
// //         const connection = await mysql.createConnection(config); // Create connection
// //         console.log('Connected to MySQL');
// //         return connection;
// //     } catch (error) {
// //         console.error('Error connecting to MySQL:', error);
// //         throw error;
// //     }
// // }

// // module.exports = { connectDB };



// import { Client } from '@vercel/postgres';

// const client = new Client({
//   connectionString: "postgres://default:r0ibBwQc5TFD@ep-floral-violet-a4k5coin-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"

// });

// // Connect to PostgreSQL
// async function connect() {
//   try {
//     await client.connect();
//     console.log('Connected to PostgreSQL');
//   } catch (error) {
//     console.error('Error connecting to PostgreSQL:', error.message);
//   }
// }

// // Export the client and connect function
// export { client, connect };

