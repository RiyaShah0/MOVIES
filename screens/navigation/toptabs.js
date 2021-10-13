import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import upcoming from '../upcoming'
import popular from '../popular'
import trending from '../trending'
const Tab = createMaterialTopTabNavigator();

function toptabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name ="upcoming" component={upcoming}/>
            <Tab.Screen name ="popular" component={popular}/>
            <Tab.Screen name ="trending" component={trending}/>

        </Tab.Navigator>
    );
}
export default toptabs