import React, { useEffect, useState } from 'react';
import Style from '../Header/Header.module.css';
import Button from '../../atoms/Button/Button';
import { FaBeer } from "react-icons/fa";

const Header = (props) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            let newTime = time + 1;
            setTime(newTime);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    useEffect(() => {
        console.log('mama le useEffect');
    }, [time]);

    return (
        <header className={Style.header}>
            Yselling
            <FaBeer />
            {props.buttons.map((element, index) => (
                <Button key={index} buttonTitle={element} onClick={() => props.onButtonClick(element)} />
            ))}
        </header>
    );
}

export default Header;
