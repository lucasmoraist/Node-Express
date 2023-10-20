import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:1234@cluster0.kyhc6m0.mongodb.net/aberto");

let db = mongoose.connection;

export default db;