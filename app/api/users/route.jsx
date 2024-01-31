
import {NextResponse} from"next/server"
import { users } from "../../util/db"

export function GET(){
    const data = users
    return NextResponse.json({data}, {status: 200})
}

export async function POST(req, resp){
    let {id, name, email, pass} = await req.json()

    if (!id || !name || !email || !pass){
        return NextResponse.json({result: "field missing"}, {status: 400});
    }
}