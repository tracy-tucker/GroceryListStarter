import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: '#696969',
    },
});

export default ({ route, navigation }) => (
    <View style={styles.container}>
        <Text>Item Details:</Text>
        <Text>{route.params.itemCallback.id}</Text>
    </View>
    
);