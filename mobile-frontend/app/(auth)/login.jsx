import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { useState } from 'react'

// Themed components
import ThemedView from '../../components/ThemedView'
import ThemedLogo from '../../components/ThemedLogo'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = () => {
    // Handle login logic here
    console.log('Login button pressed');
  } 
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedLogo style={{ width: 150, height: 150 }} />
        <Spacer />
        <ThemedText title={true} style={styles.title}>Login to your account</ThemedText>
        <Spacer />
        <ThemedTextInput style={{ width: '80%', marginBottom: 10 }} placeholder="Email" keyboardType="email-address" onChangeText={setEmail} value={email}></ThemedTextInput>
        <ThemedTextInput style={{ width: '80%', marginBottom: 10 }} placeholder="Password" secureTextEntry={true} onChangeText={setPassword} value={password}></ThemedTextInput>
        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: "#f2f2f2"}}>Login</Text>
        </ThemedButton>
        <Spacer height={20} />
        <Link href="/register">
          <ThemedText style={{ textAlign: 'center' }}>Don't have an account? Register</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
})