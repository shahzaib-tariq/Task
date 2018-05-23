import { Text,View,Image } from 'react-native';
import React from 'react';

const AgeAndName =() => {
    return (
        <View style={{ flex:1,justifyContent:'center'}}>
            <Text style={{alignSelf:'center',fontSize:30}}>Name</Text>
            <Text style={{alignSelf:'center',fontSize:30,}}>Age</Text>

        </View>

    );
};
export default AgeAndName;