/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
 import React, { useState } from 'react';
 import {Text} from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Login from './screens/login'
 import Signin from './screens/signin'
 import bottomtabs from './screens/navigation/bottomtabs'
 import MovieDetails from './screens/MovieDetails';
 
 const Stack = createNativeStackNavigator();
 
 
 function App() {
   return (
            
     <NavigationContainer>
       <Stack.Navigator initialRouteName='login'>
         <Stack.Screen name='login' component={Login}>
         </Stack.Screen>
         <Stack.Screen name='signin' component={Signin}>
         </Stack.Screen>
            <Stack.Screen name='bottomtabs' component={bottomtabs}>
         </Stack.Screen> 
            <Stack.Screen name='MovieDetails' component={MovieDetails}>
         </Stack.Screen> 
       </Stack.Navigator>
     </NavigationContainer> 
   )
 }
 
 export default App
