'use strict';
const {useEffect} = React;

const Input = () => {  
    return(
        <React.Fragment>
        <input type="text" className="letter-input" maxLength='1'></input>
        <input type="text" className="letter-input" maxLength='1'></input>
        <input type="text" className="letter-input" maxLength='1'></input>
        <input type="text" className="letter-input" maxLength='1'></input>
        <input type="text" className="letter-input" maxLength='1'></input>
        </React.Fragment>
    )
}

export default Input;