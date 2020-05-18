import React from 'react';
import classes from './Navbar.module.css';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav className={classes.navbar}>
            <div className={classes.item}>
                <Link to ='/profile' className={classes.link}>Profile</Link> 
            </div>
            <div className={classes.item}>
                <Link to ='/messagest' className={classes.link}>Messages</Link>
            </div>
            <div className={classes.item}>
                <Link to ='/users' className={classes.link}>Users</Link>
            </div>
            <div className={classes.item}>
                News
            </div>
            <div className={classes.item}>
                Music
            </div>
            <div className={classes.item}>
                Settings
            </div>
        </nav>
    );
}

export default Navbar;