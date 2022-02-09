'use strict';
const Win = (props) => {
    return (
        <React.Fragment>
        <p>Congratulations!</p> <button id="reload-button" onClick={props.reload}>Try Again</button>
        </React.Fragment>
        )
}

export default Win;