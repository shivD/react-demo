import React from 'react';
const CardImg  = props=>{
    return (
        <img className='card-img' src={props.src} alt={props.alt}/>
    )
}
export default CardImg;