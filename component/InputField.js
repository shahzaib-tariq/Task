import { View,TextInput } from 'react-native';
import React from 'react';


const InputField =() => {
    return (
        <TextInput
            style={{height: 50,fontSize:30, borderColor: 'gray', borderWidth: 1}}
        >Type here
        </TextInput>
    );

};
export default InputField;