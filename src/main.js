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
    const [count, setCount] = useState(1);
    const [hasWon, setHasWon] = useState(false);
    const [letterCount, setLetterCount] = useState(5);



    const checkGuess = (correct) => {
        const guessArr = getGuessWord();
        let guessStr = guessArr.join('').toLowerCase();
        let corStr = correct.join('').toLowerCase();
        let newStatusArr = guessArr.map((el, index)=>{
            if (correct.includes(el)) {
                return el === correct[index] ? 'd' : 's';
            } else {
                return 'n'
            }
        })
        const newInputList = inputList.slice(0, inputList.length-1);
        newInputList.push(newStatusArr);
        setInputList(newInputList)
        if (corStr === guessStr) return true;
        return false;
    }

    const handleClick = (e) => {
        const won = checkGuess(correctWord);
        setHasWon(won);
        if (!won) {
            addInputs(dStatusArr);
            setCount(count => count + 1);
        }
    }

    const addInputs = (arr) => {
        const newInput = arr
        setInputList(inputList=>[...inputList, newInput])
    }

    const reload = () => {
        setInputList([]);
        addInputs(dStatusArr);
        setHasWon(false);
        setCount(1);
        resetInputs();
        correctWord = Array.from(wordArr[Math.floor(Math.random() * wordArr.length)]);
    }
    useEffect(() => {
        if(inputList.length===0) addInputs(dStatusArr);
        console.log(correctWord)
    })
    return (
        <React.Fragment>
            {inputList.map((input)=>{
                return(
                    <InputContainer number={letterCount} statusArr={input} />
                )})
            }
            <button onClick={handleClick} disabled={hasWon}>GO!</button>
            <p>Attempt # {count}</p>
            {hasWon ? <Win reload={reload} /> : <p>Keep Trying!</p>}
        </React.Fragment>

    )

}

let domContainer = document.querySelector('#main-wrapper');
ReactDOM.render(<Main />, domContainer);