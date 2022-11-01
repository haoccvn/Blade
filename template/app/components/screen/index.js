import React from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'

const Screen = ({ children }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Screen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  content: {
    padding: 14,
  },
})
