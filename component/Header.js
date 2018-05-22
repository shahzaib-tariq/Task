import { Text,View } from 'react-native';
import React from 'react';
const Header = () => {
    const {textStyle,viewStyle}= styles;
    return (<View style={viewStyle}><Text style={textStyle}>like</Text><Text style={textStyle}>comment</Text></View>);
};
const styles ={
    viewStyle:{
        backgroundColor:'#F8F8F8',
        //pod in vertical
        justifyContent:'space-between',
        // fro left-right
        alignContent:'center',
        height:100,
        padding:15,
        //for solid border shadow
        // shadowColor:'#000',
        //shadowOffset:{width:0,height:2},
        //shadowOpacity:0.2,
        flexDirection:"row",
        elevation:2,
        position:'relative'
    },
    textStyle :
        {
            fontSize:30
        }

};
export default Header;