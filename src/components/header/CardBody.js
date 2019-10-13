import React from 'react';
import { Card } from '../card/card';

const CardTitle = props=>{
    return (
        <div className={'card-title'}>
          {props.children}
        </div>
    )
}

export default CardBody;
