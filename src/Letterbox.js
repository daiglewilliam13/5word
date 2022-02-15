'use strict' ;
import { moveToNext, moveToPrev, checkEnter } from "./fn-module.js";
const Letterbox = (props) => {
    const getClass = (letter) =>{
        return {
            'a': 'active',
            'd': 'direct-hit',
            's': 'side-hit',
            'n': 'no-hit'
        }[letter];
    }
    const classList = props.last + " letter-input " + getClass(props.letterStatus);
    const disabled = props.letterStatus==='a' ? false : true;
    return(
        <input type="text" 
                onChange={moveToNext}
                onKeyUp={moveToPrev}
                onKeyDown={(e)=>checkEnter(e, props.handleClick)}
                className={classList}
                maxLength={1}
                disabled={disabled}
                autoFocus={props.autoFocus}
                ></input>
    )
}

export default Letterbox;