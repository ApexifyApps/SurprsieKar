import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Admin from './Admin';
import BeforeAuth from './BeforeAuth';
import Home from '../screens/MainScreens/Home';
import CustomTabBar from '../components/CustomTabBar';
import Inbox from '../screens/MainScreens/Inbox';
import EventPlanner from '../screens/MainScreens/EventPlanner';
import Search from '../screens/MainScreens/Search';
import Profile from '../screens/MainScreens/Profile';
import ProductDetail from '../screens/MainScreens/DetailPages/ProductDetail';
import EventDetail from '../screens/MainScreens/DetailPages/EventDetail';
import Calender from '../screens/MainScreens/DetailPages/Calender';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const AfterAuth = () => {
    return (
        <Stack.Navigator initialRouteName='TabView' screenOptions={{headerShown:false}}>
            <Stack.Screen name="TabView" component={TabView} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="EventDetail" component={EventDetail} />
            <Stack.Screen name="Calender" component={Calender} />

        </Stack.Navigator >
    )
}





const TabView = () => {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown:false, }}    tabBar={(props) => <CustomTabBar  {...props} />}        >
            <Tab.Screen name="Home" component={Home}  />
            <Tab.Screen name="Event" component={EventPlanner} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Chat" component={Inbox} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}




export default AfterAuth