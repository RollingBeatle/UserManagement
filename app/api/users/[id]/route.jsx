import {NextResponse} from"next/server"
import { users } from "../../../util/db"
import {fs} from 'fs'

export async function GET(_, response){
    const {id} = await response.params

    const user = users.filter(u => u.id ==id)

    return NextResponse.json({user, ok: true},{status: 200})
}

export async function POST(req, res){
    let {name, email, pass} = await req.json()
    const {id} = await res.params

    const {name: uName, email: uemail, pass: uPass
    } = users.find((u) => u.id == id);

    if( uName === name && uemail ==email && pass === uPass ){
        return NextResponse.json({result: "successful login"});
    }
    else if (!name || !email || !pass){
        return NextResponse.json({result: "Please fill all the input data"});
    }
    else {
        return NextResponse.json({result: "Invalid credentials"});
    }
    
}

export async function DELETE(req, res){

    const {id} = await req.params;
    const userId = users.find( (u) =>u.id === id )

    if( userId ===-1){
        return NextResponse.json({result: "user not found"}, {status: 404});

    }

    users.splice(userId, 1)
    const updatedArray = users;
    const updatedData = JSON.stringify(updatedArray, null, 2)

    fs.writeFileSync("../../../util/db.js", `export const users = ${updatedData};`, 'utf-8');


    return NextResponse.json({success: "User deleted"})
}

