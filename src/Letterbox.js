'use strict' ;
import { moveToNext, moveToPrev } from "./fn-module.js";
const Letterbox = (props) => {
    const getClass = (letter) =>{
        return {
            'a': 'active',
            'd': 'direct-hit',
            's': 'side-hit',
            'n': 'no-hit'
        }[letter];
    }
    const classList = "letter-input " + getClass(props.letterStatus);
    const disabled = props.letterStatus==='a' ? false : true;
    return(
        <input type="text" 
                onChange={moveToNext}
                onKeyUp={moveToPrev}
                className={classList} 
                maxLength={1}
                disabled={disabled}
                ></input>
    )
}

export default Letterbox;