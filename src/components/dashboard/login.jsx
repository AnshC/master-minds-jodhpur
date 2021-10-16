import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from './supabaseClient'

export default function Login () {
    const [isUserLoggedIn, setUserLoggedIn] = useState(false);
    const [userEmail, setEmail] = useState("");
    const [userPass, setPass] = useState("");

    useEffect(()=>{
        supabase.auth.onAuthStateChange((event, session)=>{
            console.log(event, session)
        })
    }, [])

    async function loginUser (e) {
        e.preventDefault();
        const data = await supabase.auth.signIn({email: userEmail, password: userPass}).then((data)=>{
            console.log(data)
        })
    }

    return (
        <div className="login">
            <form>
                <h1>Login to MMJ</h1>
                <p>Login to view the MMJ Dashboard</p>
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    id="email" 
                    name="email" 
                    placeholder="example@mail.com"
                    onChange={((e)=>{setEmail(e.target.value)})}
                />
                <label htmlFor="pass">Password</label>
                <input 
                    type="password" 
                    id="pass" 
                    name="pass" 
                    placeholder="Something Secret"
                    onChange={((e)=>{setPass(e.target.value)})}/>
                <button onClick={((e)=>{loginUser(e)})}>
                    Login
                </button>
            </form>
            <Link to="/">
                <img src="/img/mmj-w.png" alt="MMJ Logo" />
            </Link>
        </div>
    )
}