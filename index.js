import { AppRegistry,Text,View } from 'react-native';
import React,{Component} from 'react';
import AgeAndName from './component/AgeAndName';
import Header from './component/Header';
import InputField from './component/InputField';
const App =() => {


    return (

        <View style={{borderColor:'blue', borderWidth:5, flex:1,justifyContent:'center'}}>
        <Text style={{fontSize:30,alignSelf:'center'}}>Welcome</Text>
            <AgeAndName/>
            <Header/>
            <InputField/>

</View>
    );

};
AppRegistry.registerComponent('Task', () => App);
