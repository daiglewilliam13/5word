'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _React = React,
    useState = _React.useState,
    useEffect = _React.useEffect;

import Letterbox from './Letterbox.js';

var InputContainer = function InputContainer(props) {
    var _useState = useState(props.number),
        _useState2 = _slicedToArray(_useState, 2),
        letterCount = _useState2[0],
        setLetterCount = _useState2[1];

    var _useState3 = useState([]),
        _useState4 = _slicedToArray(_useState3, 2),
        boxArr = _useState4[0],
        setBoxArr = _useState4[1];

    var addBoxes = function addBoxes(num) {
        for (var i = 0; i < num; i++) {
            setBoxArr(function (boxArr) {
                return [].concat(_toConsumableArray(boxArr), [React.createElement(Letterbox, null)]);
            });
        }
    };
    useEffect(function () {
        addBoxes(letterCount);
    }, []);
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'div',
            { className: 'input-wrapper' },
            boxArr
        )
    );
};

export default InputContainer;