import { View } from 'react-native';
import React from 'react';
import Button from 'react-native-button';

const Buttonfile =() => {
    return (
        <View style={{
            flex: 2,
            padding:15,

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
export default Buttonfile;