import { View,Button } from 'react-native';
import React from 'react';
const InputField =() => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
              <View style={{
                backgroundColor: 'green',
                padding: 10,
                borderRadius: 16,

                }}>
                    <Button
                        title="This is button"
                        color="red">
                    </Button>

            </View>

        </View>
    );

};
export default InputField;