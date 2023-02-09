import "./IncreaseButton.css"

const IncreaseButton = (props) => {
	return(
		<div>
			<button onClick={props.Increase}>Zvýšit o jedna</button>
		</div>

	)
}

export default IncreaseButton