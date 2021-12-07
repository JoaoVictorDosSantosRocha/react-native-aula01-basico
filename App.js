import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Abas/src/views/Login/Login';
import Inicial from './Abas/src/views/Inicial/Inicial';
import Chat from './Abas/src/views/Chat/Chat';
import Perfil from './Abas/src/views/Perfil/Perfil';
import Resumo from './Abas/src/views/Resumo/Resumo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function rotasStack() {
  return (
    <Stack.Navigator initialRouteName="Inicial" >
      <Stack.Screen
      name="Inicial"
      component={Inicial}
      options={
        { cardStyle: styles.screenInicial,
          headerShown: false,
        }
      }
      />
      <Stack.Screen
      name="Chat"
      component={Chat}
      options={
        { cardStyle: styles.screenChat,
          headerShown: false,
        }
      }
      />
      <Stack.Screen
      name="Sobre"
      component={Resumo}
      options={
        {  cardStyle: styles.screenResumo,
          headerShown: false,
        }
      }
      />
    </Stack.Navigator>
  );
}

function rotasDrawer() {
  return (
  <Drawer.Navigator initialRouteName='Inicial'>
    <Drawer.Screen name="Inicial"component={rotasStack}/>
    <Drawer.Screen name="Chat"component={Chat}/>
    <Drawer.Screen name="Sobre"component={Resumo}/>
    <Drawer.Screen name="Perfil"component={Perfil}/>
  </Drawer.Navigator>
  );
}

function rotasTab() {
  return (
    <Tab.Navigator
    tabBarOptions={
      {
        labelStyle: { fontSize: 24 },
        style: {backgroundColor: '#14417b'},
        activeTintColor: '#FFFFFF'
      }
    }
    >
      <Tab.Screen name="Inicial" component={rotasDrawer} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}
export default function App() {
  return(
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#081a31" />
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen
        name="Login"
        component={Login}
        options={
          {
            cardStyle: styles.screenLogin,
            headerShown: false,
          }
        }
        />
        <Stack.Screen
        name="Inicial"
        component={rotasTab}
        options={
          {
            cardStyle: styles.screenInicial,
            headerShown: false,
          }
        }
        />
</Stack.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenInicial: {
    backgroundColor: '#FCCB02'
  },
  screenChat: {
    backgroundColor: '#FCCB02'
  },
  screenResumo: {
    backgroundColor: '#FCCB02'
  },
});