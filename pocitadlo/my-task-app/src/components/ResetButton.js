import "./ResetButton.css"

const ResetButton = (props) => {
	return(
		<div>
			<button onClick={props.Reset}>Reset</button>
		</div>
	)
}

export default ResetButton