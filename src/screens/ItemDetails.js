import React from 'react';
import { View, Text } from 'react-native';


export default ({ route, navigation }) => (
    <View>
        <Text>Item Details:</Text>
        <Text>{route.params.itemCallback.id}</Text>
    </View>
    
);