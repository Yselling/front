import React from "react";

// INTERNAL IMPORT
import Style from "./Button.module.css";

const Button = (props) => {
    const [buttonTitle, setButtonTitle] = React.useState(props.buttonTitle);

    const buttonAction = () => {
        setButtonTitle("Clicked");
    }

    return (
        <button onClick={buttonAction} className={Style.button}>
            {buttonTitle}
        </button>
    );
}

export default Button;