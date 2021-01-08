import React, { useState, useEffect } from "react";
import Asharp from '../notes/Asharp.mp3'

const ASharp = ({ notes, note, setNotes }) => {
  const [audio] = useState(new Audio(Asharp));

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

export default ASharp