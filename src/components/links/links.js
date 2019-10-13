import React from 'react';
import Styles from './links.module.scss';
function Links(props){
    return(
        <a href={props.location} key={props.keyval} className={props.variant}>{props.title}</a>
    )
}
export default Links