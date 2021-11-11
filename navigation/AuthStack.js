import React, { useState } from 'react';
 import {Text} from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Login from '../screens/login'
 import Signin from '../screens/signin'

 const Stack = createNativeStackNavigator();
 
 
 function AuthStack() {
   return (

       <Stack.Navigator >
         <Stack.Screen name='login' component={Login}>
         </Stack.Screen>
         <Stack.Screen name='signin' component={Signin}>
         </Stack.Screen>
         </Stack.Navigator>
   )
 }
 
 export default AuthStack