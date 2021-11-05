import React from "react";
import Button from "./shared/Button";

function PrevButton(props) {
    return (
        <Button value="Prev" className="btn-secondary text-white" onClick={props.onClick} />
    );
}

export default PrevButton;
