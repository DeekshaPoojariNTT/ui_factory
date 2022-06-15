import { useState } from 'react';

export default function Time() {
  const [time, setTime] = useState(""); 
  return (
    <div className="m-3">        
        <label> Time &nbsp; </label>
        <input type="time"  onChange={(e) => setTime(e.target.value)}/>
    </div>
  )
}