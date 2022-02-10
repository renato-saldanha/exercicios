import React, {useState} from "react";
import { Text, Button } from "react-native";
import { Fragment } from "react/cjs/react.production.min";
import Estilo from "./estilo";

export default ({inicial, passo}) => {

    //let numero = props.inicial;
    const [numero, setNumero] = useState(inicial)

    const inc = () => setNumero(numero + passo);
    const dec = () => setNumero(numero - passo);;

    return (
        <Fragment>
            <Text style={Estilo.textoGrande}>{numero}</Text>
            <Button title='+' onPress={inc}/>
            <Button title='-' onPress={dec}/>
        </Fragment>
    )
} 