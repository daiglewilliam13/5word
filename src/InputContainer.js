'use strict';
const {useState, useEffect} = React;
import Letterbox from './Letterbox.js';

const InputContainer = (props) => {
    const [letterCount, setLetterCount] = useState(props.number);
    const [boxArr, setBoxArr] = useState([]);
    const addBoxes = (num)=>{
        for (let i=0; i<num; i++){
            setBoxArr(boxArr=>[...boxArr, <Letterbox />])
        }
    }
    useEffect(()=>{
        addBoxes(letterCount)
    },[])
    return(
        <React.Fragment>
            <div className="input-wrapper">
                {boxArr}
            </div>
        </React.Fragment>
    )
}

export default InputContainer;