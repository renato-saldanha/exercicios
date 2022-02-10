
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// import Primeiro from './componentes/Primeiro';
// import Comp00, {Comp1, Comp2} from './componentes/Multi';
// import MinMax from './componentes/MinMax'
// import Aleatorio from './componentes/Aleatorio'
// import Titulo from './componentes/Titulo';
// import Botao from './componentes/Botao';
// import Contador from './componentes/Contador';
// import Pai from './componentes/comunicacao-direta/Pai';
// import Pai from './componentes/comunicacao-indireta/Pai';

import ContadorV2 from './componentes/contador/ContadorV2'

//export default () => <Text>#Primeiro Componente</Text>
//também é um componente

export default () =>  (
  <View style={style.App}>
    <ContadorV2/>

    {/*<Pai></Pai>
    <Titulo principal="Olá" secundario="Mundo"></Titulo>
    <Botao></Botao>
    <Contador inicial={100} passo={2}></Contador>
     <Text>{1+1}</Text>
    <Comp00/>
    <Comp1/>
    <Comp2/>
    <Primeiro/>
    <MinMax min="2" max="20"/> 
    <MinMax min={6} max={60}/>
    <Aleatorio min={1} max={30}/> */} 
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