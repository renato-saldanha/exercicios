import React from 'react'
import {StyleSheet, View} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
       <View style={style.FlexV1}> 
            <Quadrado/>
            <Quadrado cor='red'/>
            <Quadrado cor='purple'/>
            <Quadrado cor='orange'/>      
            <Quadrado cor='blue'/>
       </View> 
    )
}


const style = StyleSheet.create({    
    FlexV1: {
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'space-between'//alinha 
    }
})