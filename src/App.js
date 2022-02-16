
import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Mega from './componentes/mega/Mega';

// import FlexBoxV4 from './componentes/layout/FlexBoxV4';
// import FlexBoxV3 from './componentes/layout/FlexBoxV3';
// import FlexBoxV3 from './componentes/layout/FlexBoxV2';
// import FlexBoxV3 from './componentes/layout/FlexBoxV1';
// import DigiteSeuNome from './componentes/DigiteSeuNome';
// import Primeiro from './componentes/Primeiro';
// import Comp00, {Comp1, Comp2} from './componentes/Multi';
// import MinMax from './componentes/MinMax'
// import Aleatorio from './componentes/Aleatorio'
// import Titulo from './componentes/Titulo';
// import Botao from './componentes/Botao';
// import Contador from './componentes/Contador';
// import Pai from './componentes/comunicacao-direta/Pai';
// import Pai from './componentes/comunicacao-indireta/Pai';
// import Familia from './componentes/relacao/Familia';
// import Membro from './componentes/relacao/Membro';
// import ContadorV2 from './componentes/contador/ContadorV2'
// import ParImpar from './componentes/ParImpar';
// import UsuarioLogado from './componentes/renderizacao-condicional/UsuarioLogado';
// import ListaProdutosV2 from './componentes/produtos/ListaProdutosV2';

//export default () => <Text>#Primeiro Componente</Text>
//também é um componente

export default () =>  (
  <SafeAreaView style={style.App}>
    <Mega />
  {/*<Pai></Pai>
    <FlexBoxV4/>
    <FlexBoxV3/>
    <FlexBoxV1/>
    <FlexBoxV2/>
    <DigiteSeuNome/>
    <ListaProdutosV2/>
  <UsuarioLogado usuario={{nome:"Saldanha", email:"Ranalisesaldanha@gmail.com"}}/>
  <UsuarioLogado usuario={{nome:"", email:"Lavaprato@gmail.com"}}/>  
  <UsuarioLogado usuario={{nome:"Ana", email:""}}/>
  <UsuarioLogado usuario={{nome:"Lambari", email:"Lambari@gmail.com"}}/>
      <Familia>
      <Membro nome='Bia' sobrenome='Arruda'></Membro>
      <Membro nome='João' sobrenome='Arruda'></Membro>
    </Familia>
    <Familia>
      <Membro nome='Ana' sobrenome='Tanakara'></Membro>
      <Membro nome='Carlos' sobrenome='Tanakara'></Membro>
    </Familia>
    <ParImpar/>
    <ParImpar num = {3}/>
    <ContadorV2/>
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
  </SafeAreaView>   // ^valores numericos e com string
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