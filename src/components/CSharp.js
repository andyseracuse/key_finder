import React, { useState, useEffect } from "react";
import Csharp from '../notes/Csharp.mp3'

const CSharp = ({ notes, note, setNotes }) => {
  const [audio] = useState(new Audio(Csharp));

  return (
    <div onClick={() => {
      audio.play()
      let copy = {...notes}
      copy[note] = !copy[note]
      setNotes(copy)
      }} 
      className={notes[note] ? "selected key black" : "key black"}>
    </div>
  );
};

export default CSharp