import { BaseNextResponse } from "next/dist/server/base-http";
import {NextResponse} from"next/server"

export function GET(params){
    return NextResponse.json({result: 'hello'}, {status: 200})
}