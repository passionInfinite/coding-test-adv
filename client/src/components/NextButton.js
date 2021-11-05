import React from "react";
import Button from "./shared/Button";

function NextButton(props) {
    return (
        <Button value="Next" className="btn-secondary text-white" onClick={props.onClick} />
    );
}

export default NextButton;
