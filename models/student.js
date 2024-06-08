import mongoose from "mongoose";

const studentschema = new mongoose.Schema({
    roll: {type: String},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    grade: {type: String}
})

const studentModel = mongoose.model('Student',studentschema)
export {studentModel as Student}