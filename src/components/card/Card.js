import React from 'react';
 const Card = props=>{
     const classes = props.color ? ' ' + props.color : '';
    return (
        <div className={'card' + classes}>
         {props.children}
        </div>
    )
}
export default Card;

