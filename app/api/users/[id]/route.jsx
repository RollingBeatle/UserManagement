import {NextResponse} from"next/server"
import { users } from "../../../util/db"

export async function GET(_, response){
    const {id} = await response.params

    const user = users.filter(u => u.id ==id)

    return NextResponse.json({user},{status: 200})
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

