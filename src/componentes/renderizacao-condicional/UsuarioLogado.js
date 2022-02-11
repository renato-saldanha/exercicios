import React, { Fragment }  from 'react'
import {Text} from 'react-native'
import Estilo from '../estilo'
import If from './If'

export default (props) => {
    const usuario = props.usuario || {};
    return (
        <Fragment>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.textoGrande}> Usuário logado: </Text> 
                <Text style={Estilo.textoGrande}> {usuario.nome} - {usuario.email} </Text> 
            </If>
        </Fragment>
    )
}