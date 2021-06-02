import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from '../pages/Onboarding';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Onboarding" component={OnboardingScreen} 
        options={{headerShown: false}}
      />

      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: '#ecf0f1',
            borderStyle: 'solid',
            borderWidth: 2,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomColor: '#000',
          },
          headerTitle: 'Voltar',
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
