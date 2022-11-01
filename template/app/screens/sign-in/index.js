import React, { useEffect } from 'react'
import { Screen } from '@components'
import { Button, Input, Text } from '@rneui/themed'
import { StyleSheet, View } from 'react-native'
import Config from 'react-native-config'
import { METHODS } from '@app/services/api/constants'
import { APIRequest } from '@services'

const emailIcon = {
  type: 'MaterialCommunityIcons',
  name: 'email',
  size: 24,
  color: 'rgba(0,0,0,0.6)',
}
const passwordIcon = {
  type: 'MaterialCommunityIcons',
  name: 'lock',
  size: 24,
  color: 'rgba(0,0,0,0.52)',
}
const SignInScreen = ({ navigation }) => {
  const init = async () => {
    const res = await APIRequest({ method: METHODS.GET, endpoint: '/todos/1' })
    console.log(res)
  }
  useEffect(() => {
    init()
  }, [])
  return (
    <Screen>
      <Text style={styles.title}>
        WELCOME TO SEMINAR {'\n'}ENV:{Config.ENV}
      </Text>
      <Input
        leftIcon={emailIcon}
        placeholder="Enter your email"
        inputStyle={styles.input}
        errorMessage={''}
        value={''}
        onChangeText={text => {}}
      />
      <Input
        leftIcon={passwordIcon}
        placeholder="Enter your password"
        inputStyle={styles.input}
        errorMessage={''}
        value={''}
        onChangeText={text => {}}
        secureTextEntry
      />
      <Button
        disabled={false}
        title="Sign In"
        onPress={() => {}}
        containerStyle={styles.button}
      />

      <View style={styles.signupLink}>
        <Text style={styles.text}>Don't have an Account? </Text>
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Sign Up now!
        </Text>
      </View>
    </Screen>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2f78c5',
    marginBottom: 28,
  },
  input: {
    fontSize: 16,
    color: '#404040',
  },
  text: {
    color: '#404040',
  },
  button: {
    marginTop: 24,
  },
  signupLink: {
    marginTop: 48,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  link: {
    color: '#5a90c7',
    fontWeight: 'bold',
  },
})
