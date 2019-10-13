import React from 'react';
import Links from '../links/';
import Styles from './menuItems.module.scss';
function MenuItems(props) {
    const listItems = props.menuLinks.map((items, index) =>
        <li>
            <Links location="#" keyval={index} title={items} />
        </li>
    )
    return (
        <ul className={Styles.menuitems}>{listItems}</ul>
    )
}
export default MenuItems;