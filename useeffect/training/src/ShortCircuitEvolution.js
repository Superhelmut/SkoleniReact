const ShortCircuitEvolution = () => {
	const value = "david"
	const value2 = 0
	return(
		<div>
			{value || <h1>Text</h1>}
			{value2 && <h1>Super tajný text</h1>}
		</div>
	)
}

export default ShortCircuitEvolution