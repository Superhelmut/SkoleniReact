import DecreaseButton from "./components/DecreaseButton"
import {useState} from 'react'
import IncreaseButton from "./components/IncreaseButton"
import ResetButton from "./components/ResetButton"

const App = () => {
  const [value, setValue] = useState(0)

  const DecreaseOne = () => {
    const newValue = value - 1
    setValue(newValue)
  }

  const IncreastOne = () => {
    newValue = value + 1
    setValue(newValue)
  }

  const ResetOne = () => {
    setValue(0)
  }

  return(
    <div>
      <h1>Počítadlo</h1>
      <h2>{value}</h2>
        <DecreaseButton Decrease={DecreaseOne}/>
        <IncreaseButton Increast={IncreastOne}/>
        <ResetButton Reset={ResetOne}/>
    </div>
  )
}

export default App