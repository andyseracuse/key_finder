import React, { useState, useEffect } from "react";
import Dsharp from '../notes/Dsharp.mp3'

const DSharp = ({ notes, note, setNotes }) => {
  const [audio] = useState(new Audio(Dsharp));

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

export default DSharp