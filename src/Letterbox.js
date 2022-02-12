'use strict' ;

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
    return(
        <input type="text" className={classList} maxLength='1'></input>
    )
}

export default Letterbox;