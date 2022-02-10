import React from "react";
import { Text } from "react-native";


export default (props) => {
    return (
        <Text>
            O valor aleatório entre {props.min} e {props.max} é de {Math.random() * (props.max -props.min) + props.min} 
        </Text>
    )
}


 