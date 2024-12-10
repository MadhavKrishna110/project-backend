//require('dotenv').config()
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("Mongo db connection failed!!! ", err);
})



// (async () => {
//   try {
//     mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//         console.log("ERR: ",error);
//         throw error
//     })
//     app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//     })
//   } catch (error) {
//     console.error("Error: ", error);
//     throw err;
//   }
// })();
