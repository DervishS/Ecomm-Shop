import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

// Themed components
import ThemedView from '../../components/ThemedView'
import ThemedLogo from '../../components/ThemedLogo'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {
  const handleSubmit = () => {
    // Handle registration logic here
    console.log("Register button pressed");
  }
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={{ width: 150, height: 150 }} />
      <Spacer />
      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2"}}>Register</Text>
      </ThemedButton>
      <ThemedText title={true} style={styles.title}>Register for an account</ThemedText>
      <ThemedText>Have an account? <Link href="/login"><ThemedText>login instead!</ThemedText></Link></ThemedText>
    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  }
})