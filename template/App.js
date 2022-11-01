import React, { useEffect } from 'react'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import { ThemeProvider } from '@rneui/themed'
import { Auth, Main } from '@navigators'
import { GlobalLoading } from '@components'
import { useColorScheme } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

const AppStack = () => {
  return false ? <Main /> : <Auth />
}

export default function App() {
  const scheme = useColorScheme()
  useEffect(() => {
    const onShowSplash = setTimeout(SplashScreen.hide, 500)
    return () => clearTimeout(onShowSplash)
  }, [])
  return (
    <ThemeProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AppStack />
      </NavigationContainer>
      <GlobalLoading />
    </ThemeProvider>
  )
}
