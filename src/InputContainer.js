'use strict';
const {useState, useEffect} = React;
import Letterbox from './Letterbox.js';

const InputContainer = (props) => {
    const [boxArr, setBoxArr] = useState([]);
    useEffect(()=>{
        setBoxArr(props.statusArr)    
    },[props.statusArr])
    return(
        <React.Fragment>
            <div className="input-wrapper">
                {boxArr.map(box=>{
                    console.log(box)
                    return(
                        <Letterbox letterStatus={box} />
                    )})
                }
            </div>
        </React.Fragment>
    )
}

export default InputContainer;