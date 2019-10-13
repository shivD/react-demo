import React from 'react';
import './Header.scss';

 const Header = (props)=>{
  return (
      <header className={'header ' + props.variant}>{props.children}</header>
  )
 }
 export default Header;