import React from 'react';
// import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CurrentList from '../screens/CurrentList';
import ItemDetails from '../screens/ItemDetails';
import FavoritesList from '../screens/FavoritesList';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Shopping List">
      <Stack.Screen name="Shopping List" component={CurrentList} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} options={{title: 'Item'}} />
    </Stack.Navigator>
  )
}

function MyFavs() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites List" component={FavoritesList} />
    </Stack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Shopping List" component={MyStack} />
      <Tabs.Screen name="Favorites List" component={MyFavs} />
    </Tabs.Navigator>
  )
}

export default function Nav() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}

//NEW NAVIGATION - FIRST DRAFT
// function MyTabs() {
//   return (
//     <Tabs.Navigator>
//       <Tabs.Screen name="Shopping List" component={CurrentList} options={{ title :"My Shopping List"}} />
//       <Tabs.Screen name="Favorites List" component={FavoritesList} />
//     </Tabs.Navigator>
//   )
// }

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Tabs?" component={MyTabs} options={{ title :"Shopping List"}} />
//     </Stack.Navigator>
//   )
  
// }

// export default function Nav() {
//   return (
//     <NavigationContainer>
//       <MyStack />
//     </NavigationContainer>
//   );
// }


//OLD NAVIGATION
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
    