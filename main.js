'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import Win from './Win.js';
import InputContainer from './InputContainer.js';
import { getGuessWord, disableInput, getLast5Inputs, resetInputs } from './fn-module.js';
import { data } from './5-letter-words.js';
var _React = React,
    useState = _React.useState,
    useEffect = _React.useEffect;


var wordArr = data;
var correctWord = Array.from(wordArr[Math.floor(Math.random() * wordArr.length)]);
var dStatusArr = ['a', 'a', 'a', 'a', 'a'];
var Main = function Main() {
    var _useState = useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        inputList = _useState2[0],
        setInputList = _useState2[1];

    var _useState3 = useState([]),
        _useState4 = _slicedToArray(_useState3, 2),
        wordGuess = _useState4[0],
        setWordGuess = _useState4[1];

    var _useState5 = useState(1),
        _useState6 = _slicedToArray(_useState5, 2),
        count = _useState6[0],
        setCount = _useState6[1];

    var _useState7 = useState(false),
        _useState8 = _slicedToArray(_useState7, 2),
        hasWon = _useState8[0],
        setHasWon = _useState8[1];

    var _useState9 = useState(5),
        _useState10 = _slicedToArray(_useState9, 2),
        letterCount = _useState10[0],
        setLetterCount = _useState10[1];

    var handleKeyup = function handleKeyup(e) {
        setWordGuess(getGuessWord());
    };
    var bindInputs = function bindInputs() {
        var inputs = Array.from(document.getElementsByClassName('letter-input'));
        inputs.forEach(function (input) {
            input.addEventListener('keyup', function (e) {
                handleKeyup();
                if (e.keyCode === 8) {
                    input.previousElementSibling.focus();
                } else if (input.nextElementSibling && input.nextElementSibling.nodeName === 'INPUT') {
                    input.nextElementSibling.focus();
                }
            });
        });
    };

    var checkGuess = function checkGuess(correct) {
        var guessArr = getGuessWord();
        var guessStr = guessArr.join('').toLowerCase();
        var corStr = correct.join('').toLowerCase();
        if (corStr === guessStr) return true;
        var newStatusArr = guessArr.map(function (el, index) {
            if (correct.includes(el)) {
                if (el === correct[index]) {
                    return 'd';
                } else {
                    return 's';
                }
            } else {
                return 'n';
            }
        });
        //remove last input component in inputList array
        setInputList(inputList.splice(-1, 1));
        //replace with new input component with updated array
        addInputs(newStatusArr);
        return false;
    };

    var handleClick = function handleClick(e) {
        var won = checkGuess(correctWord);
        setHasWon(won);
        setWordGuess([]);
        if (!won) {
            addInputs(dStatusArr);
            setCount(function (count) {
                return count + 1;
            });
        }
    };
    var addInputs = function addInputs(statusArr) {
        setInputList(function (inputList) {
            return [].concat(_toConsumableArray(inputList), [React.createElement(InputContainer, { number: letterCount, statusArr: statusArr })]);
        });
        bindInputs();
    };

    var reload = function reload() {
        setInputList([]);
        setHasWon(false);
        resetInputs();
        setCount(1);
        correctWord = Array.from(wordArr[Math.floor(Math.random() * wordArr.length)]);
    };
    useEffect(function () {
        addInputs(dStatusArr);
        console.log(correctWord);
    }, []);
    return React.createElement(
        React.Fragment,
        null,
        inputList,
        React.createElement(
            'button',
            { onClick: handleClick, disabled: hasWon },
            '????'
        ),
        React.createElement(
            'p',
            null,
            'Attempt # ',
            count
        ),
        hasWon ? React.createElement(Win, { reload: reload }) : React.createElement(
            'p',
            null,
            'Keep Trying!'
        )
    );
};

var domContainer = document.querySelector('#main-wrapper');
ReactDOM.render(React.createElement(Main, null), domContainer);