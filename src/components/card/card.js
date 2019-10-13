import React from 'react';
export  const Card = props=>{
    return (
        <div className={'card' + props.variant}>
         {props.children}
        </div>
    )
}

