import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import profile from '../profile';
import search from '../search'
import favourites from '../favourites'
import toptabs from '../navigation/toptabs';

const Tab = createMaterialBottomTabNavigator();

function bottomtabs({route}) {
    return(
        <Tab.Navigator
            initialRouteName='toptabs'
            activecolor="white"
            
        >

        <Tab.Screen name = "toptabs" component ={toptabs}

           options={{
               tabBarLabel: 'Movies',
               
           }} />

        <Tab.Screen name ="search" component={search}
            options={{
                tabBarLabel: 'Search',
                
            }}/>

            <Tab.Screen name ="favourites" component={favourites}
            options={{
                tabBarLabel: 'Favourites',
                
            }}/>

            <Tab.Screen name ="profile" component={profile}
            options={{
                tabBarLabel: 'Profile',
                
            }}/>
            </Tab.Navigator>

    );
}
export default bottomtabs