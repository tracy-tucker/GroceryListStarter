import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CurrentList from '../screens/CurrentList';
import ItemDetails from '../screens/ItemDetails';
import FavoritesList from '../screens/FavoritesList';
import { color } from 'react-native-reanimated';
import { View } from 'react-native';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Shopping List">
      <Stack.Screen name="Shopping List" component={CurrentList} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} options={({route}) => ({ title: route.params.itemCallback.name})} />
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
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Current') {
          iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
        } else if (route.name === 'Favorites') {
          iconName = focused ? 'ios-star' : 'ios-star-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'purple',
      inactiveTintColor: 'gray',
    }}
    >
      <Tabs.Screen
        name="Current"
        component={MyStack}
      />
      <Tabs.Screen name="Favorites" component={MyFavs} />
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
    