import { StyleSheet, Text, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'

import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const HomeScreen = () => {
  const colorScheme = useColorScheme()
  const theme = Colors.mode[colorScheme] ?? Colors.mode.light

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.background}]}>
      <ThemedLogo style={styles.img} />
      <Spacer height={5} />
      <ThemedText style={styles.title} title={true}>Welcome to our shop!</ThemedText>
      <Spacer />
      <Link href="/login" style={styles.link}><ThemedText>Login</ThemedText></Link>
      <Link href="/about" style={styles.link}><ThemedText>About page</ThemedText></Link>
      <Link href="/profile" style={styles.link}><ThemedText>Profile</ThemedText></Link>
    </ThemedView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
      container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    link: {
      marginTop: 20,
      color: "#1a1a1a",
    },
    img: {
        width: 200,
        height: 200,
    },
})