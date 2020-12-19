import React, { useState, useEffect } from "react";
import C from '../notes/C.mp3'

const useAudio = file => {
  const [audio] = useState(new Audio(file));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const CNatural = ({ notes, note, setNotes, file }) => {
  const [playing, toggle] = useAudio(C);

  return (
    <div onClick={() => {
      toggle()
      let copy = {...notes}
      copy[note] = !copy[note]
      setNotes(copy)
    }} 
    className={notes[note] ? "selected key white" : "key white"}>
    </div>
  );
};

export default CNatural