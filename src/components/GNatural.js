import React, { useState, useEffect } from "react";
import G from '../notes/G.mp3'

const GNatural = ({ notes, note, setNotes }) => {
  const [audio] = useState(new Audio(G));

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

export default GNatural