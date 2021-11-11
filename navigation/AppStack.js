import React, { useState } from 'react';
 import {Text} from 'react-native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import bottomtabs from '../screens/navigation/bottomtabs'
 import MovieDetails from '../screens/MovieDetails'
 
 const Stack = createNativeStackNavigator();
 
 
 function AppStack() {
   return (
            

       <Stack.Navigator>
            <Stack.Screen name='bottomtabs' component={bottomtabs}>
         </Stack.Screen> 
         <Stack.Screen name='MovieDetails' component={MovieDetails}>
         </Stack.Screen> 
       </Stack.Navigator>

   )
 }
 
 export default AppStack
