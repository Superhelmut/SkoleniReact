import { useState, useEffect } from "react"

const App = () => {
  const url = "http://api.open-notify.org/iss-now.json" 
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [urlMap, setUrlMap] = useState("")

  const getCoordinates = async () => {
    const respones = await fetch (url)
    const data = await respones.json()
    setLatitude(data["iss_position"]["latitude"])
    setLongitude(data["iss_position"]["longitude"])
    setUrlMap(`https://mapy.cz/zakladni?x=${latitude}&y=${longitude}&z=11`)

  }

  useEffect( () => {
    getCoordinates()
  }, [])
  return (
    <div>
      <h1>API</h1>
      <p>{latitude}</p>
      <p>{longitude}</p>
      <a href={urlMap} target="_blank">Odkaz</a>
    </div>
  )
}

export default App