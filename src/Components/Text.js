import { useState } from 'react';

export default function Text() {
  const [text, setText] = useState(""); {/* text contains the value of the text field */}

  return (
      <div className="m-3">
        <label> Text &nbsp; </label>
        <input type="text" value={text} placeholder="Enter Text" autoFocus
        onChange={(e) => setText(e.target.value)} /> {/* onChange --> event listener */}
      </div>
  )
}