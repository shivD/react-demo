import React from 'react';
function CardText (props){
 return(
     <p className={props.variant}>{props.children}</p>
 )
}
export default CardText;