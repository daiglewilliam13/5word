'use strict';

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
    return React.createElement('input', { type: 'text', className: classList, maxLength: '1' });
};

export default Letterbox;