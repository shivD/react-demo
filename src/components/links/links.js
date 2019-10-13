import React from 'react';
import './links.scss';
const Links = (props)=> {
    return (
        <a href={props.location}  className={'link ' + props.variant}>{props.title}</a>
    )
}
export default Links