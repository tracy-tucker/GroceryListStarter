import React from 'react';
// import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CurrentList from '../screens/CurrentList';
// import ItemDetails from '../screens/ItemDetails';
import FavoritesList from '../screens/FavoritesList';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tabs.Navigator>
    <Tabs.Screen name="Shopping List" component={CurrentList} />
    <Tabs.Screen name="Favorites List" component={FavoritesList} />
  </Tabs.Navigator>
  )
}

function MyStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Shopping List" component={CurrentList} />
    </Stack.Navigator>
  )
  
}

export default function Nav() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}



// const CurrentListStack = createStackNavigator({
//     CurrentList: {
//         screen: CurrentList,
//         navigationOptions: {
//             headerTitle: 'Shopping List'
//         }
//     },
//     ItemDetails: {
//         screen: ItemDetails,
//         navigationOptions: ({ navigation }) => ({
//             headerTitle: navigation.getParam("item", {}).name
//         }),
//     },
// });

// const FavoritesListStack = createStackNavigator({
//     FavoritesList: {
//         screen: FavoritesList,
//         navigationOptions: {
//             headerTitle: 'Favorites List',
//         }
//     }
// });

// const Tabs = createBottomTabNavigator({
//     CurrentList: {
//         screen: CurrentListStack,
//     },
//     FavoritesList: {
//         screen: FavoritesListStack,
//     },
// });
    