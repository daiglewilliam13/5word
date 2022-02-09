'use strict';
import Input from './Input.js';
import {
    getGuessWord,
    disableInput,
    getLast5Inputs,
    checkGuess,
} from './fn-module.js';
const {useState, useEffect} = React;


const wordArr = ['acrid', 'adopt', 'admit', 'adult'];
let correctWord = Array.from(wordArr[Math.floor(Math.random() * wordArr.length)]);
const Main = () => {
    const [inputList, setInputList] = useState([]);
    const [wordGuess, setWordGuess] = useState([]);

    const handleKeyup = (e) => {
        setWordGuess(getGuessWord());
    }
    const bindInputs = () => {
        const inputs = Array.from(document.getElementsByClassName('letter-input'));
        inputs.forEach(input => {
            input.addEventListener('keyup', function (e) {
                handleKeyup();
                if (e.keyCode === 8) {
                    input.previousElementSibling.focus()
                } else if (input.nextElementSibling && input.nextElementSibling.nodeName === 'INPUT') {
                    input.nextElementSibling.focus();
                }
            })
        })
    }
    const handleClick = (e) =>{
        checkGuess(wordGuess, correctWord);
        setWordGuess([]);
        setInputList(inputList.concat(
        <React.Fragment>
            <br></br>
            <Input key={inputList.length}/>     
        </React.Fragment>))

    }

    useEffect(()=>{
        bindInputs();
        disableInput();
        console.log(correctWord);
    },[inputList])
    return (
        <React.Fragment>
            <Input/>
            {inputList}
            <button onClick={handleClick}>????</button>
        </React.Fragment>
        
    )
    
}

let domContainer = document.querySelector('#main-wrapper');
ReactDOM.render(<Main />, domContainer);