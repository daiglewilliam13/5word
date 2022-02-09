'use strict';
import Input from './Input.js';
import Win from './Win.js';
import {
    getGuessWord,
    disableInput,
    getLast5Inputs,
    checkGuess,
    resetInputs
} from './fn-module.js';
import {data} from './5-letter-words.js';
const {useState, useEffect} = React;


const wordArr = data;
let correctWord = Array.from(wordArr[Math.floor(Math.random() * wordArr.length)]);
const Main = () => {
    const [inputList, setInputList] = useState([]);
    const [wordGuess, setWordGuess] = useState([]);
    const [count, setCount] = useState(0);
    const [hasWon, setHasWon] = useState(false);

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
        const won = checkGuess(wordGuess, correctWord);
        setHasWon(won);
        setWordGuess([]);
        if(!won){setInputList(inputList.concat(
        <React.Fragment>
            <br></br>
            <Input key={inputList.length}/>     
        </React.Fragment>))
        setCount(count=>count+1);
        } 
    }


    const reload = () => {
        setInputList([]);
        setHasWon(false);
        resetInputs();
        correctWord = Array.from(wordArr[Math.floor(Math.random() * wordArr.length)]);
    }
    useEffect(()=>{
        bindInputs();
        disableInput();
        console.log(correctWord);
    },[inputList])
    return (
        <React.Fragment>
            <Input />
            {inputList}
            <button onClick={handleClick} disabled={hasWon}>????</button>
            <p>Number of Tries: {count}</p>
            {hasWon? <Win reload={reload}/> : <p></p>}
        </React.Fragment>
        
    )
    
}

let domContainer = document.querySelector('#main-wrapper');
ReactDOM.render(<Main />, domContainer);