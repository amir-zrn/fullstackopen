import { useState } from 'react'
import Button from "./components/Button";
import Values from './components/Values';
import Statistics from './components/Statistics';
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = bad + good + neutral;
  let avg = ((all !== 0)) ? (good - bad) / all : 0;
  let perc = ( (all !== 0)) ? (good / all) * 100 : 0
  return (
    <div>

      <h4 className="title">give feedback</h4>
      <Button onClick={() => setGood(good+1)} text="good" />
      <Button onClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button onClick={() => setBad(bad+1)} text="bad" />
      <h4 className="title">Statistics</h4>
      <Statistics good={good} bad={bad} avg={avg} all={all} perc={perc} />
    </div>
  )
}

export default App