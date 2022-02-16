import React,  {Component, Fragment, useState} from 'react'
import {Button, StyleSheet, Text, TextInput, View} from 'react-native'
import Estilo from '../estilo'
import MegaNumero from './MegaNumero';

export default class Mega extends Component {    
    state = {
        qtdeNumeros : this.props.qtdeNumeros,
        numerosGerados : []
    }

    gerarNumero = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumero(nums) : novo
    }   

    alteraQtdeNumeros = (qtde) => {
        this.setState({ qtdeNumeros : +qtde }) //Informa que qtde é do tipo numerico
    }   /*No evento onChangeText quando passamos uma arrow function ele já assimila que o this é de
         dentro da classe e não gerta warning de invalid prop 'value'*/

    gerarNumerosMega = () => {
        const numerosGerados = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumero(n)], [])
            .sort((a, b) => a-b) //Ordenação
        this.setState({ numerosGerados });                      
    }

    gerarNumerosMegaSimples = () => {
        const {qtdeNumeros} = this.state;
        const numerosGerados = [];

        for (let i = 0; i < qtdeNumeros; i++) {
            const n = this.gerarNumero(numerosGerados)
            numerosGerados.push(n)
        }       
        numerosGerados.sort((a,b) => a-b);
        this.setState({ numerosGerados });                      
    }

    exibirNumeros() {
        const nums = this.state.numerosGerados
        return nums.map(num => {
            return <MegaNumero key={num} num={num}/>
        })
    }

    render() {
        return ( 
            <Fragment>
                <Text style={style.Titulo}>
                    Gerador MegaSena                
                </Text>
                <TextInput
                    keyboardType='numeric'
                    style={{borderBottomWidth: 1}}
                    placeholder='Insira aqui a quantia de numeros a serem gerados:'
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText= {this.alteraQtdeNumeros}/>                  
                <Button 
                    title='Gerar'
                    onPress={this.gerarNumerosMegaSimples}/>   
                <View 
                    style={style.Numeros}>
                    {this.exibirNumeros()}           
                </View>
            </Fragment>
        )
    } 
}


const style = StyleSheet.create({
    Titulo : {
        textAlign: 'center',
        fontSize: 32
    },
    Numeros: {
        flexDirection:'row',
        flexWrap: 'wrap'
    }
})