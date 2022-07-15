import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0]) // declaring votes as empty array of length 7
  const [biggest, setBiggest] = useState(0) // we use this to store the index of the highest vote
  const handleSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length)) // when we click next anecdote, random number is generated and we display the anecdote with that index
  } 
  const handleVote = () => {
    const votesTemp = [...votes] // we create copy of the votes array and add 1 to the current selected number (determined when we click 'next anecdote', it will match the current anecdote)
    votesTemp[selected] += 1 
    setVotes(votesTemp) // we take the copy of the votes array and apply it to the original
    setBiggest(votes.indexOf(Math.max(...votes))) // set biggest to be the index of the highest value in votes array
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} 
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleVote} text = "Add vote"/>
      <Button handleClick={handleSelected} text="Next anecdote"/>
      <h1>Anecdote with most votes</h1>
      {anecdotes[biggest]} 
      <p>has {votes[biggest]} votes</p>
    </div>

  )
}

export default App
