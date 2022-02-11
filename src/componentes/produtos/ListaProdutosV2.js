import React, { Fragment } from 'react'
import {FlatList, StyleSheet, Text} from 'react-native'
import Estilo from '../estilo'
import Produtos from './Produtos'

export default props => {
    const renderItem = ({item : p}) => {
        return <Text style={style.fonteMedia}> {p.id}) {p.nome} </Text>
    }
    return (
        <Fragment>
            <Text style={Estilo.textoGrande}> 
                    Lista de produtos:
            </Text> 

            <FlatList 
                data={Produtos} 
                keyExtractor={i => `${i.id}`}
                renderItem = {renderItem}           
            > </FlatList>
         </Fragment>
    )
}

const style = StyleSheet.create({
    fonteMedia: {
        fontSize: 22
    }
})