import "./DecreaseButton.css"

const DecreaseButton = (props) => {
	return(
		<div>
			<button onClick={props.Decrease}>Snížit o jedna</button>

		</div>
	)
}

export default DecreaseButton