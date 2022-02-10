import React, { Fragment } from 'react';
import {Button, Text} from 'react-native';
import Estilo from '../estilo';

export default props => {
    function gerarNum(min, max) {
        const fator = max-min +1
        return parseInt(Math.random() * fator) + min
    }

    return (
        <Fragment>
            <Button 
                style={Estilo.textoGrande}
                title='Executar'
                onPress={function() {
                    const n = gerarNum(props.min, props.max);
                    props.funcao(n, 'O valor é: ')
                }}
            />            
        </Fragment>
    )
}