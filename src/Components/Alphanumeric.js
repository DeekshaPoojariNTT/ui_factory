import { useState } from 'react';

export default function Alphanumeric() {
  const [alphaNum, setAlphanum] = useState(""); 

  const onInputChange = (e) => {
    const { value } = e.target; 
    const re = /^[A-Za-z0-9]+$/;
    if (value === "" || re.test(value)) {
      setAlphanum(value);
    }
  }
  return (
    <div className="m-3">        
        <label> Alphanumeric &nbsp; </label>
        <input type="text" value={alphaNum} onChange={onInputChange} />
    </div>
  )
}
