import React from 'react'
import { Screen } from '@components'
import { Button } from '@rneui/themed'
import Lottie from 'lottie-react-native'
import home_animation from '@assets/home_animation.json'
import { StyleSheet } from 'react-native'

const HomeScreen = () => {
  return (
    <Screen>
      <Lottie
        source={home_animation}
        autoPlay
        loop
        style={styles.homeAnimation}
      />
      <Button title="Sign Out" onPress={async () => {}} />
    </Screen>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  homeAnimation: {
    height: 360,
  },
})
