'use strict';
import Input from './Input.js';
const {useState, useEffect} = React;


const wordArr = ['acrid', 'adopt', 'admit', 'adult'];
let correctWord = Array.from(wordArr[Math.floor(Math.random() * wordArr.length)]);
const Main = () => {
    const [inputList, setInputList] = useState([]);
    const [wordGuess, setWordGuess] = useState([]);

    const handleKeyup = (e) => {
        setWordGuess(wordGuess.concat(e.target.value))
    }
    const disableInput = (input) => {
        let oldInputs = Array.from(document.getElementsByClassName('letter-input'));
        oldInputs = oldInputs.splice(0, oldInputs.length-5);
        oldInputs.forEach((input)=>{
            input.setAttribute('disabled',"");
        })
    }
    const checkGuess = (guess, correct) => {
        console.log(guess.join(''));
        let newInputs = Array.from(document.getElementsByClassName('letter-input'));
        newInputs = newInputs.splice(newInputs.length-5, newInputs.length)
        newInputs.forEach((input, index)=>{
            if(correct.includes(input.value)) {
                if (index===correct.indexOf(input.value)){
                    input.classList.add('direct-hit')
                } else {
                    input.classList.add('side-hit')
                }
            } else {
                input.classList.add('no-hit');
                console.log('no match')
            }
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
        disableInput();
        console.log(correctWord);
    },[inputList])
    return (
        <React.Fragment>
            <Input handleKeyup={handleKeyup}/>
            {inputList}
            <button onClick={handleClick}>????</button>
        </React.Fragment>
        
    )
    
}

let domContainer = document.querySelector('#main-wrapper');
ReactDOM.render(<Main />, domContainer);