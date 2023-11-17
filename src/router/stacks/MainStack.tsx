import {StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';
import Home from '../../pages/Home';
import Diagnose from '../../pages/Diagnose';
import MyGarden from '../../pages/MyGarden';
import Profile from '../../pages/Profile';
import Scan from '../../pages/Scan';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Icons from '../../assets/icons';
import TabBarIcon from '../../components/TabBarIcon';
const MainStack = () => {
  const Tab = createBottomTabNavigator();
  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: styles.tabBarStyle,
  };

  const tabScreens = [
    {
      name: 'Home',
      component: Home,
      icon: <Icons.Home width={30} height={30} />,
    },
    {
      name: 'Diagnose',
      component: Diagnose,
      icon: <Icons.HealtCare width={30} height={30} />,
    },
    {
      name: 'Scan',
      component: Scan,
      icon: <Icons.Ellipse width={64} height={64} />,
    },
    {
      name: 'MyGarden',
      component: MyGarden,
      icon: <Icons.Garden width={30} height={30} />,
    },
    {
      name: 'Profile',
      component: Profile,
      icon: <Icons.Profile width={30} height={30} />,
    },
  ];

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabScreens.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: ({focused}) => (
              <TabBarIcon
                icon={screen.icon}
                label={screen.name}
                focused={focused}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 70,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
