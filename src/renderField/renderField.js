import React from 'react';
import classes from '../renderField/renderField.module.css';

export const Textarea = ({input, meta, ...props}) => {
      return(<div>
        <textarea {...input} {...props} />
        {meta.touched && meta.error && <span className={classes.error}>{meta.error}</span>}
      </div>)
}

export const Input = ({input, meta, ...props}) => {
    return(<div>
      <input {...input} {...props} />
      {meta.touched && meta.error && <span className={classes.error}>{meta.error}</span>}
    </div>)
}