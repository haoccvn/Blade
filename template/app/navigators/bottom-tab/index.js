import * as React from 'react'
import { HomeScreen, SettingScreen } from '@screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTab
