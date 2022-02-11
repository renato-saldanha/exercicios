import React, { Fragment } from 'react'
import { Text } from 'react-native'

export default props => {
    return (
       <Fragment> 
           <Text>Membros: </Text>
            {props.children}
       </Fragment> //Chama as propriedades do filho
    )
}