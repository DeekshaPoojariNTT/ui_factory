import { useState } from 'react';

export default function Password() {
  const [password, setPassword] = useState(""); 
  return (
    <div className="m-3">        
        <label> Password &nbsp; </label>
        <input type="password"  placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
    </div>
  )
}