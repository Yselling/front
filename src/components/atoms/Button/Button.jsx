import React from "react";

// INTERNAL IMPORT
import Style from "./Button.module.css";

const Button = (props) => {
    return (
        <button className={Style.button}>
            {props.buttonTitle}
        </button>
    );
}

export default Button;