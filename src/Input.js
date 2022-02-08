'use strict';
const {useEffect, useState} = React;

const Input = (props) => {


useEffect(()=>{
    const inputs = Array.from(document.getElementsByClassName('letter-input'));
    inputs.forEach(input=>{
        input.addEventListener('keyup', function(e){
            props.handleKeyup(e);
            if(e.keyCode === 8 ) {
                input.previousElementSibling.focus()
            } else if (input.nextElementSibling && input.nextElementSibling.nodeName === 'INPUT') {
                input.nextElementSibling.focus();
            }
        })
    })

})    
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