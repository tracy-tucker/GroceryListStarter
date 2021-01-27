import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'flex-start',
    },
    text: {
        fontSize: 18,
        color: '#696969',
    },
});

export default ({ route, navigation }) => (
    <View style={styles.container}>
        <Text>Item Details:</Text>
        <Text>NAME: {route.params.itemCallback.name}</Text>
        <Text>ID: {route.params.itemCallback.id}</Text>
    </View>
    
);