import React from "react";
import StatisticLine from "./StatisticLine";
const Statistics = ({ good, neutral, all, bad, avg, perc }) => {
    if (all !== 0) {
    return (
        <div>
            
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={avg} />
      <StatisticLine text="Percentage" value={perc + `%`} />
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
