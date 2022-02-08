'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import Input from './Input.js';
var _React = React,
    useState = _React.useState,
    useEffect = _React.useEffect;


var wordArr = ['acrid', 'adopt', 'admit', 'adult'];
var correctWord = Array.from(wordArr[Math.floor(Math.random() * wordArr.length)]);
var Main = function Main() {
    var _useState = useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        inputList = _useState2[0],
        setInputList = _useState2[1];

    var _useState3 = useState([]),
        _useState4 = _slicedToArray(_useState3, 2),
        wordGuess = _useState4[0],
        setWordGuess = _useState4[1];

    var handleKeyup = function handleKeyup(e) {
        setWordGuess(wordGuess.concat(e.target.value));
    };
    var disableInput = function disableInput(input) {
        var oldInputs = Array.from(document.getElementsByClassName('letter-input'));
        oldInputs = oldInputs.splice(0, oldInputs.length - 5);
        oldInputs.forEach(function (input) {
            input.setAttribute('disabled', "");
        });
    };
    var checkGuess = function checkGuess(guess, correct) {
        var newInputs = Array.from(document.getElementsByClassName('letter-input'));
        newInputs = newInputs.splice(newInputs.length - 5, newInputs.length);
        newInputs.forEach(function (input, index) {
            console.log(input.value);
            if (correct.includes(input.value)) {
                if (index === correct.indexOf(input.value)) {
                    input.classList.add('direct-hit');
                } else {
                    input.classList.add('side-hit');
                }
            } else {
                console.log('no match');
            }
        });
    };
    var handleClick = function handleClick(e) {
        checkGuess(wordGuess, correctWord);
        setWordGuess([]);
        console.log(wordGuess);
        setInputList(inputList.concat(React.createElement(
            React.Fragment,
            null,
            React.createElement('br', null),
            React.createElement(Input, { key: inputList.length })
        )));
    };
    useEffect(function () {
        disableInput();
        console.log(correctWord);
    }, [inputList]);
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Input, { handleKeyup: handleKeyup }),
        inputList,
        React.createElement(
            'button',
            { onClick: handleClick },
            '????'
        )
    );
};

var domContainer = document.querySelector('#main-wrapper');
ReactDOM.render(React.createElement(Main, null), domContainer);