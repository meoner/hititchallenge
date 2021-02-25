import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  LoginScreen,
  RegisterScreen,
  LaunchListScreen,
  OneLaunchScreen,
} from './screens';
import {Info, Missions, LaunchList} from './container';
import {BackButton} from './components';
import AppProvider from './context/Provider';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function Router() {
  function Detail() {
    return (
      <>
        <OneLaunchScreen />
        <Tab.Navigator
          tabBarOptions={{
            style: {backgroundColor: '#a1232a'},
            labelStyle: {fontSize: 14, color: 'white'},
            indicatorStyle: {backgroundColor: 'black', height: 3},
          }}>
          <Tab.Screen name="Information" component={Info} />
          <Tab.Screen name="Mission" component={Missions} />
        </Tab.Navigator>
      </>
    );
  }

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerTitle: null,
              headerTransparent: true,
              headerBackImage: () => <BackButton />,
            }}
          />
          <Stack.Screen
            name="LaunchList"
            component={LaunchList}
            options={{
              headerTitle: 'Launch List',
              headerTitleAlign: 'center',
              headerStyle: {elevation: 0},
              headerBackImage: () => <BackButton />,
            }}
          />
          <Stack.Screen
            name="Details"
            component={Detail}
            options={{
              headerTitle: 'Launch List',
              headerTitleAlign: 'center',
              headerStyle: {elevation: 0},
              headerBackImage: () => <BackButton />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default Router;

//headerStyle: {elevation: 0},
