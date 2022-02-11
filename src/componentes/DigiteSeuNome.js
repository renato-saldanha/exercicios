import React, { useState } from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import Estilo from './estilo';

export default props => {
    const [nome, setNome] = useState('Teste')
    return (
        <View style={Estilo.textoGrande}> 
            <TextInput  style={style.InputConfig} 
                        placeholder="Digite seu nome"
                        value={nome}
                        onChangeText={nome => setNome(nome)}/>
        </View> //ciclo de vida-> mudar o estado do componente para mudar a interface grafica
    )
}


const style = StyleSheet.create({
    InputConfig: {
        backgroundColor: 'gray'
    }
})