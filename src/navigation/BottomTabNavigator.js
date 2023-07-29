import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import Home from 'react-native-vector-icons/Octicons';
import User from 'react-native-vector-icons/FontAwesome';
import Cart from 'react-native-vector-icons/MaterialIcons';
import Menu from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/ProfileScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen.js';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeScreenStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Home name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <User name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ShoppingCartScreen"
        component={ShoppingCartScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Cart name="shopping-cart-checkout" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Menu name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
