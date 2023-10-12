import React from 'react';
import Style from '../Header/Header.module.css';
import Button from '../../atoms/Button/Button';

const Header = (props) => {
    return (
        <header className={Style.header}>
            Yselling
            {props.buttons.map((element, index) => (
                <Button key={index} buttonTitle={element} onClick={() => props.onButtonClick(element)} />
            ))}
        </header>
    );
}

export default Header;
