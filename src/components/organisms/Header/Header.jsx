import React from 'react';
import Style from '../Header/Header.module.css';
import Button from '../../atoms/Button/Button';



const Header = (props) => {
    
    return (
        <header className={Style.header}>
            Yselling
            {props.buttons.map(element => {
                return <Button buttonTitle={element} />
            })}
        </header>
    );
}

export default Header;