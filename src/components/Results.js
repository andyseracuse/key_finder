import React from 'react'

export default function Results({ results, setResults }) {
  const flats = function(note) {
    if(note === 'A#') {
      return "A#(Bb)"
    }
    if(note === 'C#') {
      return "C#(Db)"
    }
    if(note === 'D#') {
      return "D#(Eb)"
    }
    if(note === 'F#') {
      return "F#(Gb)"
    }
    if(note === 'G#') {
      return "G#(Ab)"
    }
    else{
      return note
    }
  }
  if (results.length) {
    return(
      <div className="results-container">
        {results.map((result) => {
          return(
            <div className="result-container-container">
              <div className="result">
                <div className="result-container">
                  <p className="result-title">
                    Key
                  </p>
                  <div className="key-name">
                    {flats(result.key)}
                  </div>
                </div>
                <div className="result-container">
                  <p className="result-title">
                      Analysis
                  </p>
                  <div className="match-container">
                    <div className="match-title">In key:</div>
                    <div className="matches" style={{width: result.matches * 30 + 'px'}}>
                      <div className="match-number">
                        {result.matches}
                      </div>
                    </div>
                  </div>
                  <div className="match-container">
                    <div className="match-title">Out of key:</div>
                    <div className="mismatches" style={{width: result.mismatches * 30 + 'px'}}>
                      <div className="match-number">
                        {result.mismatches}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider"></div>
            </div>
          )
        })}
      </div>
    )
  } else {
    return <div></div>
  }
}
