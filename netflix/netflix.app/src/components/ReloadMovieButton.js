import "./ReloadMovieButton.css"

const ReloadMovieButton = (props) => {
	return(
		<div>
			<button className="reload-movies-button" onClick={props.reload}>Načíst</button>
		</div>
	)
}

export default ReloadMovieButton