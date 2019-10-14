import React from 'react';
import './Header.scss';

 const Header = (props)=>{
    const classes = props.color ? ' ' + props.color : '';
  return (
      <header className={'header ' + classes}>{props.children}</header>
  )
 }
 export default Header;