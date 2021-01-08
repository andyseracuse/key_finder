import React, { useState, useEffect } from "react";
import C from '../notes/C.mp3'

const CNatural = ({ notes, note, setNotes, file }) => {
  const [audio] = useState(new Audio(C));

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

export default CNatural