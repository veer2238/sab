import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Loginj from './login1';
import { NavigationContainer } from '@react-navigation/native';

import Formikv from './src/formik';






 




export default function App() {

  const Stack = createStackNavigator();





   
    return (

      <NavigationContainer>

      <Stack.Navigator>
      <Stack.Screen name="login" component={Loginj} />
      <Stack.Screen name="register" component={Formikv} />
      
    </Stack.Navigator>
    </NavigationContainer>
     

    
      
     
      
    
      
    )
  
}



