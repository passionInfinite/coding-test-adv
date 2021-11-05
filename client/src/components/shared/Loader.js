import React from "react";

function Loader(props) {
    return (
        <div className={`spinner-border ${props.color}`} role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    );
};

export default Loader;
