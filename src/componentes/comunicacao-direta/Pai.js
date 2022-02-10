import React, { Fragment } from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';
import Filho from './Filho';

export default props => {
    let y=2;
    let x=3;
    return (
       <Fragment> 
           <Filho a={y} b={x}></Filho>
           <Filho a={y + 100} b={x + 200}></Filho>
       </Fragment> 
    )
}