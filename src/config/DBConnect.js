import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:123@lucas.sr6tzmd.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;