import React from 'react'
import {StyleSheet, View} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
       <View style={style.FlexV4}> 
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
       </View> 
    )
}


const style = StyleSheet.create({    
    FlexV4: {
        width: 100,
        backgroundColor: 'black',
        flexGrow:1
    },
    V0: {
        backgroundColor: 'gray',
        height:0,
        
    },
    V1: {
        backgroundColor: 'purple',
        flexGrow: 1
    },
    V2: {
        backgroundColor: 'blue',
        flexGrow: 1
    }
})