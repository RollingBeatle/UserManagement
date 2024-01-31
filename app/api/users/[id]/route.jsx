import {NextResponse} from"next/server"
import Result from "postcss/lib/result"

export function GET(_, response){
    const {id} = response.params

    return NextResponse.json({result: id})
}