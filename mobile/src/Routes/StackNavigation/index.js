import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from '../DrawerNavigation';
import CadCompras from '../../pages/Compras/ComprasTab';
import Login from '../../pages/Login';

const Stack = createStackNavigator(); 

export default function StackNavigation() { 
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Drawer} options={{ headerShown: false }}/>
        <Stack.Screen name="CadCompras" component={CadCompras} options={{ headerShown: true, headerTitle: "Compras" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}