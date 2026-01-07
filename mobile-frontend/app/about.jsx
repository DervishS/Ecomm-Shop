import { StyleSheet, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'

import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const About = () => {
    const colorScheme = useColorScheme()
    const theme = Colors.mode[colorScheme] ?? Colors.mode.light

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
      <ThemedText style={styles.title}>About page</ThemedText>
      <Spacer />
      <Link href="/" style={styles.link}><ThemedText>Go back Home</ThemedText></Link>
    </ThemedView>
  )
}

export default About

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
        color: 'blue',
    },
})