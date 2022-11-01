import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DetailScreen } from '@screens'
import BottomTab from '../bottom-tab'

const Stack = createNativeStackNavigator()
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default MainStack
