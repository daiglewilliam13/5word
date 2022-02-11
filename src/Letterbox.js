'use strict' ;

const Letterbox = (props) => {
    const classList = "letter-input " + props.letterStatus
    return(
        <input type="text" className={classList} maxLength='1'></input>
    )
}

export default Letterbox;