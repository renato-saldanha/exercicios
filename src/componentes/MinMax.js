import React from "react";
import { Text } from "react-native";  
import Estilo from "./estilo";

export default (props) => (
    <Text style={Estilo.textoGrande}>
        O valor de {props.max} é maior que {props.min}
    </Text>
 )