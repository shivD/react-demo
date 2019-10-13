import React from 'react';
import Styles from './Header.module.scss';

 function Header(props){
  return (
      <header className={Styles.header +' ' +  props.variant}>{props.children}</header>
  )
 }
 export default Header;