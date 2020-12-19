import React from 'react'

export default function Indicator({ notes, note }) {
  return (
    <div className={notes[note] ? "selected" : "not-selected"}>
    </div>
  )
}
