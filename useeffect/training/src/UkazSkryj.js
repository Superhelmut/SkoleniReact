import { useState } from "react"

const UkazSkryj = () => {
	const nazev = "Název"
	const [show, setShow] = useState(false)

	return(
		<div>
			<button onClick={ () => setShow(!show)}>Ukaž/Skryj</button>
			{show && nazev}
		</div>
	)
}

export default UkazSkryj