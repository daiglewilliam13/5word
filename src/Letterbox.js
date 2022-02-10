'use strict' ;

const getClassList = (letterTrue, posTrue, isActive) => {
    if (isActive) return "";
    if (letterTrue && posTrue) return "direct-hit ";
    if(letterTrue && !posTrue) return "side-hit ";
    return "no-hit "
}
const Letterbox = (props) => {
    const classList = "letter-input " + getClassList(props.isLetter, props.isPos, props.isActive);
    return(
        <input type="text" className={classList} maxLength='1'></input>
    )
}

export default Letterbox;