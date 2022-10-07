import './darkMode.css';
import Lune from '../../assets/croissant-de-lune.png'
import sun from '../../assets/soleil.png'
import React, { useState, useEffect } from 'react';

function DarkMode() {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div>
            <button onClick={toggleTheme} className={theme}>Toggle Theme {theme === 'light' ? <img src={sun} className="picto-dark" /> : <img src={Lune} className="picto-dark" />}</button>
        </div>
    )
}

export default DarkMode;