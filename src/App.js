import { useState } from 'react'

const Header = (prop) => {
  return (
    <div>
      <h1>{prop.header}</h1>
    </div>
  )
}


const otsikko = 'give feedback'
const väliOtsikko = 'statistics'

const App = () => {

  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let bad2 = -Math.abs(bad);

  let neutral2 = -Math.abs(neutral) + neutral

  return (
    <div>
      <Header header={otsikko} />
        <div>
          <button onClick={() => setGood(good + 1)}>
            Good
          </button>
          <button onClick={() => setNeutral(neutral + 1)}>
            Neutral
          </button>
          <button onClick={() => setBad(bad + 1)}>
            Bad
          </button>
        </div>
        <Header header={väliOtsikko} />
        <div>
          Good: {good}
        </div>
        <div>
          Neutral: {neutral}
        </div>
        <div>
          Bad: {bad}
        </div>
        <div>
          All: {good+bad+neutral}
        </div>
        <div>
        Average : {(good+bad2+neutral2)/(good+bad+neutral)}
        </div>
        <div>
          Positive : {(good)/(good+bad+neutral)*100} %
        </div>
    </div>
  )
}

export default App