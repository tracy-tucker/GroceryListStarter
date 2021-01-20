import React from 'react';
import { View, Text } from 'react-native';


export default ({ route, navigation }) => (
    <View>
        <Text>Item Details?</Text>
        <Text>{route.params.itemCallback.id}</Text>
        {/* <Text>Item: {JSON.stringify(navigation.navigate.itemCallback)}</Text> */}
        {/* <Text>{JSON.stringify(navigation.getParam("item"), null,2)}</Text> */}
    </View>
    
);

// function ItemDetails({ route, navigation }) {
//     const {itemId} = route.params;
//     const {otherParam} = route.params;
//     return (
//         <View>
//             <Text>Item Details</Text>
//             <Text>itemId: {JSON.stringify(itemId)}</Text>
//             <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//         </View>
//     )
// }

// export default ItemDetails();