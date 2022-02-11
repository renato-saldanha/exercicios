import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default props => {
    const tamanho =  props.lado || 50;
    return (
       <View style={{ 
            height: tamanho,
            width: tamanho,
            backgroundColor: props.cor || '#000'
        }}/>
    )
}
