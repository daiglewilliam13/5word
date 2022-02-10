'use strict';
const {useEffect} = React;
import Letterbox from './Letterbox.js';

const Input = (props) => {  
    return(
        <React.Fragment>
            <Letterbox isActive={...props.isActive}/>
            <Letterbox isActive={...props.isActive}/>
            <Letterbox isActive={...props.isActive}/>
            <Letterbox isActive={...props.isActive}/>
            <Letterbox isActive={...props.isActive}/>
        </React.Fragment>
    )
}

export default Input;