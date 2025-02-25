import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose
        .connect(process.env.MONGO_URI, {
            dbName: "CODEWAYS ONLINE JUDGE",
        })
        .then(() => {
            console.log("Database Connection: OK");
        })
        .catch((err) => {
            console.log(`Error: Database Connection Failed!!\n Details: ${err}`);
        });
}