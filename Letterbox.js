'use strict';

import { moveToNext } from "./fn-module.js";
var Letterbox = function Letterbox(props) {
    var getClass = function getClass(letter) {
        return {
            'a': 'active',
            'd': 'direct-hit',
            's': 'side-hit',
            'n': 'no-hit'
        }[letter];
    };
    var classList = "letter-input " + getClass(props.letterStatus);
    var disabled = props.letterStatus === 'a' ? false : true;
    return React.createElement('input', { type: 'text',
        onKeyUp: moveToNext,
        className: classList,
        maxLength: 1,
        disabled: disabled
    });
};

export default Letterbox;