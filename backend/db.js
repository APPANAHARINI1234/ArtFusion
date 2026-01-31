// backend/db.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URL;

const client = new MongoClient(uri);

let db;

export const connectDB = async () => {
  if (!db) {
    await client.connect();
    console.log("MongoDB Connected");
    db = client.db("artfusion");
  }
  return db;
};
