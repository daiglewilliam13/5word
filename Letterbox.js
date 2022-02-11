'use strict';

var Letterbox = function Letterbox(props) {
    var classList = "letter-input " + props.letterStatus;
    return React.createElement("input", { type: "text", className: classList, maxLength: "1" });
};

export default Letterbox;