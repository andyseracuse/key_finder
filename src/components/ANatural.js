import React, { useState, useEffect } from "react";
import A from '../notes/A.mp3'

const ANatural = ({ notes, note, setNotes }) => {

  const [audio] = useState(new Audio(A));

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

export default ANatural