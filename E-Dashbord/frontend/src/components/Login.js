import React from 'react'
import { useState } from 'react' 
export default function Login() {
    const [email,setEmail] = useState();
    const [password,setPassword]= useState();

    const handleLogin= async ()=>{
        let result=await fetch('')
        console.log(email,password);
        
    }

    return (
    <div>
        <h1>Login</h1>

        <input type='email' placeholder='email' value={email}
        onChange={(event)=>{
            setEmail(event.target.value);
            console.log(event.target.value);
        }}
        />
        <input type='password' placeholder='password' value={password}
        onChange={(event)=>{
            setPassword(event.target.value)
            console.log(event.target.value);
            
        }}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
