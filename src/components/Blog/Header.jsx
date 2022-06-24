import React from 'react';
import classes from './Header.module.css';
import team from "../../assets/images/teams.svg";
function Header() {
    return (
        <div className="header">
            <header className={classes.header}>
                WELCOME TO n<span1>G</span1>eni LIFE🔥 <span1>HERE</span1> IS WHaT <span1>WE</span1> ARE <span1>READING👨‍💻</span1>
            </header>
            <div className="Blogimage">
                <img src={team} alt="team" height="fit-content" display="block" margin-left="auto" margin-right="auto"  />
            </div>
        </div>
    )
}

export default Header
