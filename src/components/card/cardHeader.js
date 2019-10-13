import React from 'react';
 const Cardheader = props=>{
    return (
        <div className='card-header'>
          {props.children}
        </div>
    )
}
export default Cardheader;