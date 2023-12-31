import mongoose from "mongoose";
import "dotenv/config";

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI);

const connectionData = mongoose.connection;

connectionData.once("open", () => {
    console.log("DB CONNECT")
})