import mongoose from "mongoose";

const adminschema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const adminModel = mongoose.model('Admin',adminschema)
export {adminModel as Admin}