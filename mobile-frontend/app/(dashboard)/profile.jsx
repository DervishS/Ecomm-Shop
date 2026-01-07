import { StyleSheet } from 'react-native'

// Themed components
import ThemedView from '../../components/ThemedView'
import ThemedLogo from '../../components/ThemedLogo'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'

const Profile = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
        <ThemedLogo style={{ width: 150, height: 150 }} />
        <ThemedText>Profile</ThemedText>
        <Spacer />
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})