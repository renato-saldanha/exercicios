import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Estilo from '../estilo'

export default ({num}) => {
    return (
        <View style={style.Container}>
            <Text style={Estilo.textoGrande, style.Num}> 
                {num}      
            </Text> 
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        width: 50,
        backgroundColor: 'gray',
        borderRadius: 75
    },
    Num: {
        color: 'white', 
        textAlign:'center'
    }
})