'use strict';
const {useState, useEffect} = React;
import Letterbox from './Letterbox.js';

const InputContainer = (props) => {
    const [boxArr, setBoxArr] = useState([]);
    const handleClick = props.handleClick;
    useEffect(()=>{
        setBoxArr(props.statusArr)
    },[props.statusArr])
    return(
        <React.Fragment>
            <div className="input-wrapper">
                {boxArr.map((box, index)=>{
                    
                    return(
                        <Letterbox letterStatus={box} autoFocus={index===0} last={index===boxArr.length-1} handleClick={handleClick}/>
                    )})
                }
            </div>
        </React.Fragment>
    )
}

export default InputContainer;