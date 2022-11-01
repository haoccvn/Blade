import React from 'react'
import { View, Modal, StyleSheet } from 'react-native'
import Lottie from 'lottie-react-native'
import activity_indicator from '@assets/activity_indicator.json'

const GlobalLoading = () => {
  return (
    <Modal
      visible={false}
      statusBarTranslucent
      animationType="fade"
      transparent>
      <View style={styles.container}>
        <Lottie source={activity_indicator} autoPlay loop style={styles.icon} />
      </View>
    </Modal>
  )
}

export default GlobalLoading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.12)',
  },
  icon: {
    width: 80,
    height: 80,
  },
})
