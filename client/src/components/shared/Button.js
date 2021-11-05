import React from 'react';

function Button(props) {
    return (
        <button
            {...props}
            className={`btn ${props.isActive ? 'btn-primary' : 'btn-outline-primary'} ${props.className}`}
        >
            {props.value}
        </button>
    );
};

export default Button;
