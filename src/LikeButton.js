'use strict';
const { useState } = React;

const LikeButton = () => {
    const handleClick = (e) => {
        e.preventDefault();
        setIsLiked(()=>!isLiked)
    }
    const [isLiked, setIsLiked] = useState(false)
    return(
        <React.Fragment>
        <button onClick={handleClick}>click</button>
        {isLiked ? <p>liked</p> : <p>not liked</p>}
        </React.Fragment>
    )
}

export default LikeButton;