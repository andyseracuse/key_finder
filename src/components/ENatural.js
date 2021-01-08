import React, { useState, useEffect } from "react";
import E from '../notes/E.mp3'

const ENatural = ({ notes, note, setNotes }) => {
  const [audio] = useState(new Audio(E));

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

export default ENatural