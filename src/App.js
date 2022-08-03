import { useState } from 'react'

const Header = (prop) => {
  return (
    <div>
      <h1>{prop.header}</h1>
    </div>
  )
}

const NoFeedback = (prop) => {
  return (
    <div>
      <p>{prop.feed}</p>
    </div>
  )
}

const otsikko = 'Give feedback'
const väliOtsikko = 'Statistics'
const feedback = 'No feedback given'

const NewLine = () => {
  return(
    <div>
    </div>
  )
}

const StatisticLine = ({text, value, text2}) => {
  return (
    <div>
      <p>{text} {value} {text2}</p>
    </div>
  )
}

const Statistics = (props) => {

  return (
    <div>
      <NewLine />
      <StatisticLine text='Good: ' value={props.good} />
      <StatisticLine text='Neutral: ' value={props.neutral} />
      <StatisticLine text='Bad: ' value={props.bad} />
      <StatisticLine text='All: ' value={props.good+props.bad+props.neutral} />
      <StatisticLine text='Positive: ' value={(props.good) / (props.good + props.bad + props.neutral) * 100} text2='%'/>
    </div>
  )
}
const Button = ({handlingClick, props}) => {
  return(
    <button onClick={handlingClick}>{props}</button>
  )
}

const App = () => {

  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good +1);
  const addNeutral = () => setNeutral(neutral +1);
  const addBad = () => setBad(bad +1);

  let bad2 = -Math.abs(bad);
  let neutral2 = -Math.abs(neutral) + neutral;

  if (good >= 1 || neutral >= 1 || bad >= 1){
    return (
      <div>
        <Header header={otsikko} />
          <div>
            <Button handlingClick={addGood} props='Good' />
            <Button handlingClick={addBad} props='Bad' />
            <Button handlingClick={addNeutral} props='Neutral' />
          </div>
          <Header header={väliOtsikko} />
          <div>
          </div>
          <div>
              <Statistics good={good} neutral={neutral} bad={bad} all={good+bad+neutral} 
                positive={(good)/(good+bad+neutral)*100} />
          </div>
          <div>
                Average:{(good+bad2+neutral2)/(good+bad+neutral)}
          </div>

      </div>
    )
  } 
  else {
    return(
      <div>
        <div>
        <Header header={otsikko} />
          <div>
            <Button handlingClick={addGood} props='Good' />
            <Button handlingClick={addBad} props='Bad' />
            <Button handlingClick={addNeutral} props='Neutral' />
          </div>
          </div>
          <Header header={väliOtsikko} />
          <div>
            <div>
          <NoFeedback feed={feedback} />
            </div>
      </div>
      </div>
    )
    
  }
  
}

export default App