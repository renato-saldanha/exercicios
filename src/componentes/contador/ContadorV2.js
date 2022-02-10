import React, {Fragment, useState} from 'react'
import {Text} from 'react-native'
import Estilo from '../estilo'
import ContadorDisplay from './ContadorDisplay'
import ContadorBotoes from './ContadorBotoes'

export default props => {
    const [num, setNum] = useState(0);

    const inc= () => setNum(num + 1)
    const dec= () => setNum(num - 1)

    return (
        <Fragment>
            <Text style={Estilo.textoGrande}> 
                    Contador             
            </Text> 
            <ContadorDisplay num={num}/>
            <ContadorBotoes inc={inc} dec={dec}/>
        </Fragment>
    )
}
