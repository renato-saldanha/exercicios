import React, {Fragment} from "react";
import {View, Text } from 'react-native';
import Estilo from "./estilo";

export default props => {
    return (
        <Fragment>
            <Text style={Estilo.textoGrande}>{props.principal}</Text>
            <Text>{props.secundario}</Text>            
        </Fragment>        
    )
}