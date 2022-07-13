import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
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
      <h1>give feedback</h1>
      <p>
        <Button handleClick={handleGood} text='good'/>
        <Button handleClick={handleNeutral} text='neutral'/>
        <Button handleClick={handleBad} text='bad'/>
      </p>
      <h1>statistics</h1>
      <ul>
        <li>good {good}</li>
        <li>neutral {neutral}</li>
        <li>bad {bad}</li>
        <li>all {allClicks}</li>
        <li>average {average}</li>
        <li>positive {positive}%</li>
      </ul>
    </div>
  )
}

export default App