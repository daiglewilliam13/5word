'use strict';

var _React = React,
    useEffect = _React.useEffect;

import Letterbox from './Letterbox.js';

var Input = function Input(props) {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Letterbox, { isActive: props.isActive }),
        React.createElement(Letterbox, { isActive: props.isActive }),
        React.createElement(Letterbox, { isActive: props.isActive }),
        React.createElement(Letterbox, { isActive: props.isActive }),
        React.createElement(Letterbox, { isActive: props.isActive })
    );
};

export default Input;