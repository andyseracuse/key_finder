import React, { useState, useEffect } from "react";
import F from '../notes/F.mp3'

const FNatural = ({ notes, note, setNotes }) => {
  const [audio] = useState(new Audio(F));

  return (
    <div onClick={() => {
      audio.play()
      let copy = {...notes}
      copy[note] = !copy[note]
      setNotes(copy)
    }} 
    className={notes[note] ? "selected key white" : "key white"}>
    </div>
  );
};

export default FNatural