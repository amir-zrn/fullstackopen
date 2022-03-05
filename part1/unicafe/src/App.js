import { useState } from 'react'
import Button from "./components/Button";
import Values from './components/Values';
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h4 className="title">give feedback</h4>
      <Button onClick={() => setGood(good+1)} text="good" />
      <Button onClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button onClick={() => setBad(bad+1)} text="bad" />
      <h4 className="title">Statistics</h4>
      <Values text="good" value={good} />
      <Values text="neutral" value={neutral} />
      <Values text="bad" value={bad} />
    </div>
  )
}

export default App