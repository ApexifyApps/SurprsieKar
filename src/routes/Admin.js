
import { View, Text } from 'react-native'

import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import AdminHome from '../screens/AdminScreens/AdminHome';
import AddProductDetail from '../screens/AdminScreens/AddProductDetail';

const Stack = createStackNavigator();

const Admin = () => {
    return (
        <Stack.Navigator initialRouteName='AdminHome' screenOptions={{headerShown:false}}>
            <Stack.Screen name="AdminHome" component={AdminHome} />
            <Stack.Screen name="AddProductDetail" component={AddProductDetail} />

        </Stack.Navigator>
    )
}

export default Admin
