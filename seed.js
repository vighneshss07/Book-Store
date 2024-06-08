import  Express  from "express";
import bcrypt from 'bcrypt'
import {Admin} from './models/Admin.js'
import './db.js'

async function AdminAccount() {

try {
    const admincount = await Admin.countDocuments()
    if(admincount === 0){
        const hashPassword = await bcrypt.hash('adminpassword',10)
        const newAdmin = new Admin({
            username: 'admin',
            password: hashPassword
        })
        await newAdmin.save()
        console.log("account created")
    }   else {
            console.log("account already existed")
    }
} catch(err) {
    console.log("error")
}
}

AdminAccount()
