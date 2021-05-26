import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Profile from '../pages/Profile';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
    <AppDrawer.Navigator
    drawerStyle={{
     backgroundColor: '#ecf0f1'
    }}
    drawerContentOptions={{
        labelStyle:{
            fontWeight: 'bold',
            fontSize: 16,
            color: '#000'
        },
        activeTintColor: '#FFF',
        activeBackgroundColor: '#55efc4',
        inactiveBackgroundColor: '#636e72',
        inactiveTintColor: '#DDD',
        itemStyle: {
            marginVertical: 5,
        }
    }}
    >
        <AppDrawer.Screen name="Home" component={Home}/>
        <AppDrawer.Screen name="Perfil" component={Profile} />
    </AppDrawer.Navigator>
    );
}

export default AppRoutes;
