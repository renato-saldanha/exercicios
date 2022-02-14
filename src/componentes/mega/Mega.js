import React,  {Component, useState} from 'react'
import {Button, StyleSheet, Text, TextInput, View} from 'react-native'
import Estilo from '../estilo'

export default class Mega extends Component {    
    state = {
        qtdeNumeros : this.props.qtdeNumeros   
    }

    render() {
        return (
            <View>
                <Text style={style.Titulo}>Gerador MegaSena</Text>
                <TextInput
                    placeholder='Insira aqui a quantia de numeros a serem gerados:'
                    value={$`this.state.qtdeNumeros`}
                    onChangeText={text => this.setState(this.state.qtdeNumeros)}/>
                <Button 
                    title='Gerar'/>
            </View>
        )
    } 
}

const style = StyleSheet.create({
    Titulo : {
        textAlign: 'center',
        fontSize: 32
    }
})