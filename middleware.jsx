import {NextResponse} from "next/server"
export function middleware(request) {
    console.log(request)
    if(false){
        return NextResponse.json({success: "successfully ran"})
    }
    
}
export const config = {
    matcher: ["/users/:path*"]
}