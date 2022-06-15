import { useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default function Phone() { 
  const [value, setValue] = useState();
  
  return (
    <div className="m-3 row">
      <div className="col-2">
        <label> Phone Number </label>
      </div>        
      <div class="col-3">
        <PhoneInput placeholder="Enter phone number" value={value} onChange={setValue}/>
        <p>{value}</p>
      </div>
    </div>
  )
}


