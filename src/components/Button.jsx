import React from 'react';

function Button(props) {
    const handleClick = ()=>{
        alert("you clicked this component");
    }
    return (
       <button onClick={handleClick}>
           I don't do anything
       </button>
    );
}

export default Button;