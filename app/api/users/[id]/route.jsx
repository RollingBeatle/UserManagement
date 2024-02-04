import {NextResponse} from"next/server"
import { users } from "../../../util/db"
import {fs} from 'fs'

export async function GET(_, response){
    const {id} = await response.params

    const user = users.filter(u => u.id ==id)

    return NextResponse.json({user, ok: true},{status: 200})
}

export async function POST(req, res){
    let {name, email, password} = await req.json()
    const {id} = await res.params

    const {name: uName, email: uemail, password: uPassword
    } = users.find((u) => u.id == id);

    if( uName === name && uemail ==email && password === uPassword ){
        return NextResponse.json({result: "successful login"});
    }
    else if (!name || !email || !pass){
        return NextResponse.json({result: "Please fill all the input data"});
    }
    else {
        return NextResponse.json({result: "Invalid credentials"});
    }
    
}

export async function DELETE(req, res) {
    const { id } = await res.params;
  
    // Find the index of the user to delete in the users array
    const userIndex = users.findIndex((user) => user.id === id);
  
    if (userIndex === -1) {
      return NextResponse.json({ result: "User not found" }, { status: 404 });
    }
  
    // Remove the user from the users array
    users.splice(userIndex, 1);
  
    // Update the user data in the db.js file
    updateUserData();
  
    return NextResponse.json({ success: "User Successfully Deleted" });
  }
  
  function updateUserData() {
    const updatedData = `export const users = ${JSON.stringify(users, null, 2)};`;
    fs.writeFileSync("./app/util/db.js", updatedData, "utf-8");
  }

