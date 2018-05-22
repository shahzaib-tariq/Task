import { View } from 'react-native';
import React from 'react';
import Button from 'react-native-button';

const InputField =() => {
    return (
        <View style={{
            flex: 1,

            justifyContent:'space-between',
            alignItems: 'center',
            flexDirection: 'row',

        }}>

            <Button style={{
                color:'green',
                fontSize:30,
            }}>like
            </Button>

            <Button style={{
            color:'green',
                fontSize:30,
        }}>comment
        </Button>

        </View>
    );

};
export default InputField;