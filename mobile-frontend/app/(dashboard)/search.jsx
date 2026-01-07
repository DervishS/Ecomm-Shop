import { StyleSheet, Text, View } from 'react-native'

// Themed components
import ThemedView from '../../components/ThemedView'
import ThemedLogo from '../../components/ThemedLogo'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'

const Search = () => {
  return (
    <ThemedView>
        <ThemedLogo style={{ width: 150, height: 150 }} />
        <ThemedText>Search</ThemedText>
        <Spacer />
    </ThemedView>
  )
}

export default Search

const styles = StyleSheet.create({
        container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})