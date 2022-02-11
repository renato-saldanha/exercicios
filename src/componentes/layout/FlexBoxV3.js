import React from 'react'
import {StyleSheet, View} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
       <View style={style.FlexV3}> 
            <Quadrado lado={30}/>
            <Quadrado cor='red' lado={40}  />
            <Quadrado cor='purple' lado={50}/>
            <Quadrado cor='orange' lado={60}/>      
            <Quadrado cor='blue'  lado={70}/>
       </View> 
    )
}


const style = StyleSheet.create({    
    FlexV3: {
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        width: '100%',
        height: 350,
        backgroundColor: 'pink'        
    }
})