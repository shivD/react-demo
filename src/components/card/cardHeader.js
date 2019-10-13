import Reat from 'react';
export  const Cardheader = props=>{
    return (
        <div className={'card-title'}>
          {props.children}
        </div>
    )
}