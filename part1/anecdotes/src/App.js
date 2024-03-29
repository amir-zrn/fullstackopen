import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const anecdotesScore = new Array(anecdotes.length+1).join('0').split('').map(parseFloat)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotesScore)

  const randNumber = () => {
    let num = Math.floor(Math.random() * ( (anecdotes.length - 1) - 0 + 1)) + 0
    setSelected(num)
  }

  const updateVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  var votesMax = Math.max.apply(null, votes)

  const maxIndex = votes.indexOf(votesMax)

  return (
    <div>
      <h4>Anecdote of the day</h4>
      {anecdotes[selected]}
      <br />
      {votes[selected]}
      <br />
      <button onClick={randNumber}>next anecdote</button>
      <button onClick={updateVotes}>vote</button>
      
      <h4>Anecdote with most votes</h4>
      {anecdotes[maxIndex]}
    </div>
  )
}

export default App