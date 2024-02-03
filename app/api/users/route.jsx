
import {NextResponse} from"next/server"
import { users } from "../../util/db"
import fs from 'fs'

export function GET(){
    const data = users
    return NextResponse.json({data}, {status: 200})
}

export async function POST(req, resp){
    let {id, name, age, email, password} = await req.json()
    console.log("Creating user")
    if (!id || !name || !age || !email || !password){
        return NextResponse.json({result: "field missing"}, {status: 400});
    }
    else {
        users.push({id, name, age, email, password})

        const updatedArray = users;
        const updatedData = JSON.stringify(updatedArray, null, 2)

        fs.writeFileSync("../../util/db.js", `export const users = ${updatedData};`, 'utf-8');

        return NextResponse.json({success: "registered succesfully"}, {status: 200})
    }
}

export async function PUT(req, res){
    let {id, name, age, email, password} = await req.json()
    const userId = users.findIndex((user) => user.id == id)
    
    if (userId === -1){ 

        return NextResponse.json({result: "User not found"}, {status: 404})
    }
    if(name){
        users[userId].name = name
    }
    if(age){
        users[userId].age = age
    }
    if(email){
        users[userId].email = email
    }
    if(pass){
        users[userId].password = password
    }

    const updatedArray = users;
    const updatedData = JSON.stringify(updatedArray, null, 2)

    fs.writeFileSync("../../util/db.js", `export const users = ${updatedData};`, 'utf-8');

    return NextResponse.json({success: "updated succesfully"}, {status: 200})

}