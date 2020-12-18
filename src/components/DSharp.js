import React, { useState, useEffect } from "react";
import Dsharp from '../notes/Dsharp.mp3'

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

const DSharp = ({ notes, note, setNotes }) => {
  const [playing, toggle] = useAudio(Dsharp);

  return (
    <div onClick={() => {
      toggle()
      let copy = {...notes}
      copy[note] = !copy[note]
      setNotes(copy)
    }} 
    className="key black">
    </div>
  );
};

export default DSharp