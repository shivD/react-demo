import React from 'react';
import Links from '../links/';
import Styles from './menuItems.module.scss';
const MenuItems= (props)=> {
    const listItems = props.menuLinks.map((items, index) =>
        <li key={index}>
            <Links location="#" title={items} />
        </li>
    )
    return (
        <ul className={Styles.menuitems}>{listItems}</ul>
    )
}
export default MenuItems;