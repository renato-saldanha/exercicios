
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Primeiro from './componentes/Primeiro';
import Comp00, {Comp1, Comp2} from './componentes/Multi';

//export default () => <Text>#Primeiro Componente</Text>
//também é um componente

export default () =>  (
  <View style={style.App}>
    <Text>{1+1}</Text>
    <Comp00/>
    <Comp1/>
    <Comp2/>
    <Primeiro/>
  </View>
)



 const style = StyleSheet.create({
    App: {
      backgroundColor: '#A000',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center'      
    }
 })