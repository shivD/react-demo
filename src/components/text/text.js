import React from 'react';
const  Text = (props)=>{
 return(
     <span className={{...props.name}}>{props.children}</span>
 )
}
export default Text;