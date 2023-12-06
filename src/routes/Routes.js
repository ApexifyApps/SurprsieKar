import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BeforeAuth from './BeforeAuth';
import AfterAuth from './AfterAuth';
import Admin from './Admin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Loader from '../Loader';

const Stack = createStackNavigator();
const Routes = () => {

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);

  const [user, setUser] = useState();

 

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth()?.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;


  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {
        user ?
          <>

            <Stack.Screen name="Loader" component={Loader} />

        
          </>
          :
          <Stack.Screen name="BeforeAuth" component={BeforeAuth} />

      }

      {
      }
    </Stack.Navigator>
  )
}

export default Routes