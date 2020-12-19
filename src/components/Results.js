import React from 'react'

export default function Results({ results, setResults }) {
  if (results.length) {
    return(
      <div className="results-container">
        {results.map((result) => {
          return(
            <div className="result">
              <div className="result-container">
                <p className="result-title">
                  Key
                </p>
                <div className="key-name">
                  {result.key}
                </div>
              </div>
              <div className="result-container">
                <p className="result-title">
                    Matches in Key
                </p>
                <div className="matches" style={{width: result.matches * 30 + 'px'}}>
                  <div className="match-number">
                    {result.matches}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    return <div></div>
  }
}
