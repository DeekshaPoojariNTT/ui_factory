import { useState } from 'react';

export default function Date() {
  const [date, setDate] = useState(""); 
  return (
    <div className="m-3">        
        <label> Date &nbsp; </label>
        <input type="date"  onChange={(e) => setDate(e.target.value)}/>
    </div>
  )
}