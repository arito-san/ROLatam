import React from "react";
import { Text } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from './types';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../views/home";
import SignIn from "../views/signIn";
const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();
const StackNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home" >
        <Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
        {/* <Screen name='ClockIn' component={ClockIn}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Text style={{ marginLeft: -16, fontWeight: 'bold', color: '#fff', fontSize: 20 }}>
              Marcar ponto
            </Text>
          ),
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#144BC9',
          },
          headerShadowVisible: false
        }}
      />
      <Screen name='Login' component={Login} options={{ headerShown: false }} /> */}
      </Navigator>
    </NavigationContainer>
  )
}
export default StackNavigation;