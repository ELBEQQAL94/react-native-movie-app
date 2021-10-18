// Libs
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// Screens
import {Login} from './screens';

// Redux Store
import {Provider} from 'react-redux';

// Core Components
import Tabs from './navigation/Tabs';

// Store
import store from './store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Login'}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
