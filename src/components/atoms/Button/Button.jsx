import React from "react";
import Style from "./Button.module.css";

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={Style.button}>
        {props.buttonTitle}
        </button>
    );
}

export default Button;
