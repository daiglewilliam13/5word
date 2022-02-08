'use strict';

var _React = React,
    useEffect = _React.useEffect,
    useState = _React.useState;


var Input = function Input(props) {

    useEffect(function () {
        var inputs = Array.from(document.getElementsByClassName('letter-input'));
        inputs.forEach(function (input) {
            input.addEventListener('keyup', function (e) {
                props.handleKeyup(e);
                if (e.keyCode === 8) {
                    input.previousElementSibling.focus();
                } else if (input.nextElementSibling && input.nextElementSibling.nodeName === 'INPUT') {
                    input.nextElementSibling.focus();
                }
            });
        });
    });
    return React.createElement(
        React.Fragment,
        null,
        React.createElement('input', { type: 'text', className: 'letter-input', maxLength: '1' }),
        React.createElement('input', { type: 'text', className: 'letter-input', maxLength: '1' }),
        React.createElement('input', { type: 'text', className: 'letter-input', maxLength: '1' }),
        React.createElement('input', { type: 'text', className: 'letter-input', maxLength: '1' }),
        React.createElement('input', { type: 'text', className: 'letter-input', maxLength: '1' })
    );
};

export default Input;