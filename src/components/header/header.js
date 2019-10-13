import React from 'react';
import './Header.scss';

 const Header = (props)=>{
  return (
      <header className={'header ' + props.color}>{props.children}</header>
  )
 }
 export default Header;