'use strict';

var getClassList = function getClassList(letterTrue, posTrue, isActive) {
    if (isActive) return "";
    if (letterTrue && posTrue) return "direct-hit ";
    if (letterTrue && !posTrue) return "side-hit ";
    return "no-hit ";
};
var Letterbox = function Letterbox(props) {
    var classList = "letter-input " + getClassList(props.isLetter, props.isPos, props.isActive);
    return React.createElement("input", { type: "text", className: classList, maxLength: "1" });
};

export default Letterbox;