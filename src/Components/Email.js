import { useState } from 'react';

export default function Email() {
  const [email, setEmail] = useState(""); 
  const [error, setError] = useState(""); 

  const handleEmail = (e) => {
    const { value } = e.target;
    let re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!{email} || re.test({email}) === false){
      if ( re.test(value) ) {
        setEmail(value)
        setError("")
      }
      else{
        setError("Please enter valid email")
      }
    }
  }

  return (
    <div className="m-3">        
        <label> Email &nbsp; </label>
        <input type="email" onChange={handleEmail} />
        <span style={{color:"red"}}>{error}</span>
    </div>
  )
}
