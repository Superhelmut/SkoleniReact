import { useState, useEffect } from "react"

const App = () => {
  const url = "https://api.kanye.rest/"
  const [quote, setQuote] = useState("výchozí text")

  const getQuote = () => {
    const response = await fetch(url)
    const data = await response.json()
    const finalyQuote = data["quote"]
    setQuote(finalyQuote)
  }


  useEffect(() => {
    getQuote()
  })

  return (
    <div>
      <h1>Šířka obrazovky</h1>
    </div>
  )
}

export default App