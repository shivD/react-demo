import React from 'react';

const Alert = props =>{
    const classes = props.color ? ''+ props.color : '';
    return(
        <div className={'alert '+ classes}>{props.title}</div>
    )
}
export default Alert;