import React from 'react';
import './links.scss';
const Links = (props)=> {
    const classes = props.variant ? ' ' + props.variant : '';

    return (
        <a href={props.location}  className={'link ' + classes}>{props.title}</a>
    )
}
export default Links