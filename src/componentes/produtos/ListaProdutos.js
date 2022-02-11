import React, { Fragment } from 'react'
import {StyleSheet, Text} from 'react-native'
import Estilo from '../estilo'
import Produtos from './Produtos'

export default props => {
    function obterLista() {
        return  Produtos.map(p => { 
                   return <Text key={p.id} style={style.fonteMedia}>{p.id})- {p.nome} custa: R${p.preco}</Text>
                })
    }
    return (
        <Fragment>
            <Text style={Estilo.textoGrande}> 
                    Lista de produtos:
            </Text> 
           {obterLista()} 
        </Fragment>
    )
}

const style = StyleSheet.create({
    fonteMedia: {
        fontSize: 22
    }
})