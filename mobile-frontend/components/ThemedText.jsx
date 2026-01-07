import { Text, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedText = ({ title = false, style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors.mode[colorScheme] ?? Colors.mode.light

    const textColor = title ? theme.title : theme.text
  return (
      <Text style={[{ color: textColor}, style]}
        {...props}
      />
  )
}

export default ThemedText