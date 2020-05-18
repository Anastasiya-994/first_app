import React from 'react';
import classes from './Header.module.css';
import { Link} from 'react-router-dom';

function Header (props){
    return(
        <header className={classes.header}>
            <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"/> 
            {props.isAuth? 
                <div className={classes.login}>{props.login} 
                    <button onClick={props.LogOutThunk}>Logout</button>
                </div>
            :<Link to = '/login'> 
                <div className={classes.login}>Login</div>
            </Link>
            }
        </header>
    );
}

export default Header;