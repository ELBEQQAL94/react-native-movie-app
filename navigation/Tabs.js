// Libs
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Constants
import {COLORS, icons, SIZES} from '../constants';

// Core Components
import {TabButton} from '../components';

// Screens
import {Home, Notification, Favourite, Profile} from '../screens';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            backgroundColor: COLORS.orange,
            borderTopColor: 'transparent',
            height: 80,
            borderTopLeftRadius: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
          },
          null,
        ],
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabButton focused={focused} icon={icons.home} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => (
            <TabButton focused={focused} icon={icons.notification} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({focused}) => (
            <TabButton focused={focused} icon={icons.favourite} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabButton focused={focused} icon={icons.profile} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
