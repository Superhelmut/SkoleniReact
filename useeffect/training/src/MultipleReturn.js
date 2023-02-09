import { useState, useEffect } from "react"
const url = "http://api.open-notify.org/iss-now.json"

const MultipleReturn = () => {
	const [loading, setLoading] = useState(false)
	const [latitude, setLatitude] = useState("")
	const [longitude, setLongitude] = useState("")
  
	

	useEffect( () => {
		fetch(url)
			.then( (response) => response.json() )
			.then( (data) => data["iss_position"] )
			.then( (position) => {
				setLatitude(position["latitude"])
				setLongitude(position["longitude"])
			})
		setLoading(false)
	}, [])

	if(loading){
		<h1>Načítání stránky</h1>
	}

	return(
		<div>
			<p>{latitude}</p>
			<p>{longitude}</p>
		</div>
	)
}

export default MultipleReturn