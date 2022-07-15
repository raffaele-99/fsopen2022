import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad, allClicks, average, positive}) => {
  if (allClicks === 0) return(
  <div>
    <h1>Statistics:</h1>
    <p>No feedback given</p>
  </div>)
  else return (
  <div>
    <h1>Statistics:</h1>
  
  <table>
    <tbody>
        <StatisticLine text="Good" value={good}/>
        <StatisticLine text="Neutral" value={neutral}/>
        <StatisticLine text="Bad" value={bad}/>
        <StatisticLine text="All" value={allClicks}/>
        <StatisticLine text="Average" value={average}/>
        <StatisticLine text="% Positive" value={positive}/>
    </tbody>
  </table>
  </div>
  
  )
}

const StatisticLine = ({ text, value } ) => (
      <tr><td>{text}</td><td>{value}</td></tr>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allClicks = (good + neutral + bad)
  const average = ((good * 1) + (neutral * 0) + (bad * -1) / allClicks)
  const positive = ((good / allClicks) * 100)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>Give feedback:</h1>
      <p>
        <Button handleClick={handleGood} text='good'/>
        <Button handleClick={handleNeutral} text='neutral'/>
        <Button handleClick={handleBad} text='bad'/>
      </p>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} average={average} positive={positive} />
    </div>
  )
}

export default App