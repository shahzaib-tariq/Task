import {View,Image } from 'react-native';
import React from 'react';

const Picture =() => {
    return (

        <Image style={{width: 180, height: 250}}
                   source={require('../IMG_20180210_213028.jpg')}
        />




    );
};
export default Picture;