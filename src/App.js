
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Primeiro from './componentes/Primeiro';
import Comp00, {Comp1, Comp2} from './componentes/Multi';
import MinMax from './componentes/MinMax'
import Aleatorio from './componentes/Aleatorio'

//export default () => <Text>#Primeiro Componente</Text>
//também é um componente

export default () =>  (
  <View style={style.App}>
    <Text>{1+1}</Text>
    <Comp00/>
    <Comp1/>
    <Comp2/>
    <Primeiro/>
    <MinMax min="2" max="20"/> 
    <MinMax min={6} max={60}/> 
    <Aleatorio min={1} max={3}/> 
  </View>   // ^valores numericos e com string
)



 const style = StyleSheet.create({
    App: {
      backgroundColor: '#A000',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      textAlign: 'center'
    }
 })