import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';



const StatusHook =(props)=> {

    let [editMode, SetEditMode] = useState(false);
    let [status, SetStatus] = useState(props.status);
    useEffect(()=>{SetStatus(props.status)}, [props.status])

    let ChangeStatus=(e)=>{
        SetStatus(e.currentTarget.value)
    }

    let dactiveEditMode=()=>{
        SetEditMode(false);
        props.SetUserStatusThunk(status)
    }

    return(<div>
            {!editMode &&
                 <div onClick={()=>SetEditMode(true)}>{props.status||'----'}</div>
            }
            {editMode &&
                <input onBlur={dactiveEditMode} value={status} onChange={ChangeStatus}></input>
            }
        </div>
    );
}

export default StatusHook;