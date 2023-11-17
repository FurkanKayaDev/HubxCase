import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {colors} from '../constants/constants';

interface Props {
  icon: any;
  label: string;
  focused: boolean;
}

const TabBarIcon = ({icon, label, focused}: Props) => {
  return (
    <View style={label === 'Scan' ? styles.scanIcon : styles.tabBarIcon}>
      {icon}
      <Text style={{color: focused ? colors.green : '#748c94', fontSize: 12}}>
        {label !== 'Scan' && label}
      </Text>
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  tabBarIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    top: Platform.OS === 'ios' ? 8 : 0,
  },
  scanIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    top: Platform.OS === 'ios' ? -5 : -15,
    width: Platform.OS === 'ios' ? 50 : 60,
    height: Platform.OS === 'ios' ? 50 : 60,
    borderRadius: 50,
  },
});
