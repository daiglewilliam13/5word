'use strict';
import Win from './Win.js';
import InputContainer from './InputContainer.js';
import {
    getGuessWord,
    disableInput,
    getLast5Inputs,
    resetInputs,
} from './fn-module.js';
import { data } from './5-letter-words.js';
const { useState, useEffect } = React;


const wordArr = data;
let correctWord = Array.from(wordArr[Math.floor(Math.random() * wordArr.length)]);
const dStatusArr = ['a', 'a', 'a', 'a', 'a'];
const Main = () => {
    const [inputList, setInputList] = useState([]);
    const [wordGuess, setWordGuess] = useState([]);
    const [count, setCount] = useState(1);
    const [hasWon, setHasWon] = useState(false);
    const [letterCount, setLetterCount] = useState(5);

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

    const checkGuess = (correct) => {
        const guessArr = getGuessWord();
        let guessStr = guessArr.join('').toLowerCase();
        let corStr = correct.join('').toLowerCase();
        if(corStr === guessStr) return true;
        let newStatusArr = guessArr.map((el, index)=>{
            if (correct.includes(el)) {
                if (el === correct[index]) {
                    return 'd';
                } else {
                    return 's';
                }
            } else {
                return 'n'
            }
        })
        //remove last input component in inputList array
        setInputList(inputList.splice(-1,1))
        //replace with new input component with updated array
        addInputs(newStatusArr);
        return false;
    }

    const handleClick = (e) => {
        const won = checkGuess(correctWord);
        setHasWon(won);
        setWordGuess([]);
        if (!won) {
            addInputs(dStatusArr);
            setCount(count => count + 1);
        }
    }
    const addInputs = (statusArr) => {
        setInputList(inputList=>([...inputList, <InputContainer number={letterCount} statusArr={statusArr}/>]))
        bindInputs();
    }


    const reload = () => {
        setInputList([]);
        setHasWon(false);
        resetInputs();
        setCount(1);
        correctWord = Array.from(wordArr[Math.floor(Math.random() * wordArr.length)]);
    }
    useEffect(() => {
        addInputs(dStatusArr);
        console.log(correctWord);
    }, [])
    return (
        <React.Fragment>
            {inputList}
            <button onClick={handleClick} disabled={hasWon}>????</button>
            <p>Attempt # {count}</p>
            {hasWon ? <Win reload={reload} /> : <p>Keep Trying!</p>}
        </React.Fragment>

    )

}

let domContainer = document.querySelector('#main-wrapper');
ReactDOM.render(<Main />, domContainer);