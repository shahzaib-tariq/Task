import { AppRegistry,Text,View ,Image,TextInput,ScrollView} from 'react-native';
import React,{Component} from 'react';
import AgeAndName from './component/AgeAndName';
import Header from './component/Header';
import Buttonfile from './component/Buttonfile';
import InputField from './component/InputField';
import Picture from './component/Picture';
const App =() => {


    return (
        <ScrollView>
        <View style={{backgroundColor:'white',
            borderColor:'blue',
            borderWidth:5,
            borderRadius:15,
            flex:1,
            justifyContent:'center'}}>

            <Header/>

            <View style={{
                flex:3,
                justifyContent:'center',
                alignItems: 'center',
                flexDirection: 'row',}}>

                <Picture/>
                <AgeAndName/>
            </View>

            <Buttonfile/>
            <InputField/>

            <Header/>

            <View style={{
                flex:3,
                justifyContent:'center',
                alignItems: 'center',
                flexDirection: 'row',}}>

                <Picture/>
                <AgeAndName/>

            </View>

            <Buttonfile/>
            <InputField/>

        </View>
        </ScrollView>
    );

};
AppRegistry.registerComponent('Task', () => App);
