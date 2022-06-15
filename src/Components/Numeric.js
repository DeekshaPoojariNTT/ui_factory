import { useState } from 'react';

export default function Numeric() {
  const [num, setNum] = useState(0); 
  return (
    <div className="m-3">        
        <label> Number &nbsp; </label>
        <input type="number" value={num} onChange={(e) => setNum(e.target.value)}/>
    </div>
  )
}