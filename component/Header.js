import { Text,View } from 'react-native';
import React from 'react';
const Header = () => {
  return(
    <Text style={{padding:15,
        borderColor:'blue',
        borderWidth:5,
        borderRadius:15,
        fontWeight: 'bold',
        fontSize:30,
        textAlign:'center'}}>
        Welcome
    </Text>
  );
};
export default Header;