import React, { useState } from 'react'
import CNatural from './CNatural'
import CSharp from './CSharp'
import DNatural from './DNatural'
import DSharp from './DSharp'
import ENatural from './ENatural'
import FNatural from './FNatural'
import GNatural from './GNatural'
import FSharp from './FSharp'
import GSharp from './GSharp'
import ANatural from './ANatural'
import ASharp from './ASharp'
import BNatural from './BNatural'

import C from '../notes/C.mp3'


export default function PitchInput() {

  const [notes, setNotes] = useState({"C": false, "C#": false, "D": false, "D#": false, "E": false, "F": false, "F#": false, "G": false, "G#": false, "A": false, "A#": false, "B": false})

  const whatKey = function(obj) {
    const arr = [];
    for(let note in obj) {
      if (obj[note]) {
        arr.push(note)
      }
    }
    const pattern = [2,2,1,2,2,2,1]
    const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
    const out = [];
  
    for (let i = 0; i < 12; i++) {
      let noteIndex = i;
      const matches = [];
      for(let j = 0; j < pattern.length; j++) {
        if(arr.includes(notes[noteIndex])){
          matches.push(notes[noteIndex]);
        }
        noteIndex += pattern[j]
      }
      if (matches.length > 0) {
        out.push({key: notes[i], matches: matches.length})
      }
    }
    console.log(out.sort((a, b) => b.matches - a.matches))
  }

  return (
    <div className="piano-container">
      <button className="keyFinder" onClick={() => whatKey(notes)} >Determine Key</button>
      <div className="piano">
        <CNatural note="C" notes={notes} setNotes={setNotes} />
        <CSharp  note="C#" file={C} notes={notes} setNotes={setNotes} />
        <DNatural  note="D" notes={notes} setNotes={setNotes} />
        <DSharp  note="D#" notes={notes} setNotes={setNotes} />
        <ENatural  note="E" notes={notes} setNotes={setNotes} />
        <FNatural  note="F" notes={notes} setNotes={setNotes} />
        <FSharp  note="F#" notes={notes} setNotes={setNotes} />
        <GNatural  note="G" notes={notes} setNotes={setNotes} />
        <GSharp note="G#" notes={notes} setNotes={setNotes} />
        <ANatural note="A" notes={notes} setNotes={setNotes} />
        <ASharp note="A#" notes={notes} setNotes={setNotes} />
        <BNatural note="B" notes={notes} setNotes={setNotes} />
      </div>
    </div>
  )
}
