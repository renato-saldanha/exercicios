import React, { Fragment } from "react";
import { Button } from "react-native";

export default props => {
    function executar() {
        console.warn('OI')
    }

    return (
        <Fragment>
            <Button 
                onPress={()=>console.warn('aee')}
                title='Executar #01!'
            />
            <Button 
                onPress={executar}
                title='Executar #02!'
            />
        </Fragment>
    )
}