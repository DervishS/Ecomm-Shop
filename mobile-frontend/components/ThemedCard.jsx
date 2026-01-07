import { View, useColorScheme, StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedCard = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors.mode[colorScheme] ?? Colors.mode.light
  return (
    <View style={[{ 
        backgroundColor: theme.uiBackground, 
        }, style.card,
        style]}
        {...props}
    /> // Self-closing View to automatically render the children props.
  )
}

export default ThemedCard

const style = StyleSheet.create({
    card: {
        borderRadius: 6,
        padding: 16,
    }
})