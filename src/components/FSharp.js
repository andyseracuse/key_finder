import React, { useState, useEffect } from "react";
import Fsharp from '../notes/Fsharp.mp3'

const FSharp = ({ notes, note, setNotes }) => {
  const [audio] = useState(new Audio(Fsharp));
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

export default FSharp