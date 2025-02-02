import React  from "react";

import { useState } from "react";

 function SingUp(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const collectDate = () => {
        console.log(name,email,password);
        
    }
    return(
        <div>
            <h1>SingUp</h1>
            <input  className="inputBox" type="text" placeholder="Name" value={name} 
                onChange={(event) => {
                    setName(event.target.value);
                    console.log(event.target.value);
                  }}/>
                
            <input className="inputBox" type="text" placeholder="Email" value={email} 
            onChange={(event)=>{
                setEmail(event.target.value);
                console.log(event.target.value);    
            }}/>

            <input  className="inputBox" type="password" placeholder="Password"
            value={password}
            onChange={(event)=>{
                setPassword(event.target.value);
                console.log(event.target.value);
            }}/>

            <button  onClick={collectDate}type="submit">Submit</button>
        </div>
    )
}

export default SingUp;
