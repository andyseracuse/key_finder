import React, { useState, useEffect } from "react";
import test from '../notes/Csharp.mp3'

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

const CSharp = ({ notes, note, setNotes }) => {
  const [playing, toggle] = useAudio(test);

  return (
    <div onClick={() => {
      toggle()
      let copy = {...notes}
      copy[note] = !copy[note]
      setNotes(copy)
    }} 
    className={notes[note] ? "selected key black" : "key black"}>
    </div>
  );
};

export default CSharp