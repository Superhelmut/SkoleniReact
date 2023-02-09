import {useState, useEffect} from "react"

const App = () => {
  const [windowsize, setWindowSize] = useState(window.innerWidth)

  const sizeControl = () => {
    setWindowSize(window.innerWidth)
  }

  useEffect( () => {
    window.addEventListener("resize", sizeControl)
    return () => {
      window.removeEventListener("resize", sizeControl)
    }
  })
  return(
    <div>
      <h1>Šířka obrazovky</h1>
      <h2>{windowsize}</h2>
    </div>
  )
}

export default App