import React from 'react'
import Sharp from './Sharp'
import Natural from './Natural'

export default function PitchInput() {
  const notes = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"]
  return (
    <div className="ajs-keyboard">
      {notes.map((note) => {
        return note.includes('#') ? <Sharp note={note} /> : <Natural note={note} />
      })}
    </div>
  )
}
