import { useState } from "react"
import { supabase } from "./supabaseClient"

export default function CreateUser() {
    const [userEmail, setUserEmail] = useState("")
    const [userPass, setUserPass] = useState("")
    async function login (e) {
        e.preventDefault();
        await supabase.auth.signUp({
            email: userEmail,
            password: userPass
        }).then((data)=>{
            console.log(data)
        })
    }
    return(
        <form>
            <input 
                type="text" 
                placeholder="email"
                onChange={((e)=>{setUserEmail(e.target.value)})}
            />
            <input 
                type="password" 
                placeholder="pass"
                onChange={((e)=>{setUserPass(e.target.value)})}
            />
            <button onClick={((e)=>{login(e)})}>
                Submit
            </button>
        </form>
    )
}