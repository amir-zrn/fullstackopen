import React from "react";
import Values from "./Values";
const Statistics = ({ good, neutral, all, bad, avg, perc }) => {
    if (all !== 0) {
    return (
        <div>
            
      <Values text="good" value={good} />
      <Values text="neutral" value={neutral} />
      <Values text="bad" value={bad} />
      <Values text="all" value={all} />
      <Values text="average" value={avg} />
      <Values text="Percentage" value={perc + `%`} />
        </div >
    )
    } else {
        return (
            <div>
                <span>No feedback given</span>
            </div>
        )
    }
}

export default Statistics;
