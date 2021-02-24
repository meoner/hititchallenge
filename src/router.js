import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, RegisterScreen,LaunchListScreen} from './screens';
import {BackButton} from './components';

const Stack = createStackNavigator();

function Router() {
  return (
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
          component={LaunchListScreen}
          options={{
            headerTitle: 'Launch List',
            headerStyle: {elevation: 0},
            headerBackImage: () => <BackButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;

//headerStyle: {elevation: 0},