import React from 'react';
import use from '../../img/user.jpg';
import { Link } from 'react-router-dom';
import classes from './Users.module.css';


let UserElement = (props) => {
    return (props.state.map((u) => {
        return (
            <div>
                <div>
                    <div>
                        <Link to={`/profile/${u.id}`}><img src={(u.photos.small == null) ? use : u.photos.small} className={classes.photo} /></Link>
                        <div>{u.name}</div>
                    </div>
                    <div>
                        {u.followed

                            ? <button disabled={props.isProses.some(id => id === u.id)} onClick={() => {
                                props.UnFollowThunk(u.id);
                            }}>Unfollow</button>

                            : <button disabled={props.isProses.some(id => id === u.id)} onClick={() => {
                                props.FollowThunk(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </div>
                <div>
                    <div>{u.status}</div>
                    {/* <div>
                  <div>{u.location.city}</div>
                  <div>{u.location.country}</div>
              </div> */}
                </div>


            </div>
        )
    })

    )
}

export default UserElement;
