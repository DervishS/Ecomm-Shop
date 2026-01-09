import { TextInput, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'


const ThemedTextInput = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors.mode[colorScheme] ?? Colors.mode.light
  return (
    <TextInput style={[
        {
            backgroundColor: theme.uiBackground,
            color: theme.text,
            padding: 20,
            borderRadius: 6,
        },
        style   
    ]}
    {...props}
    ></TextInput>
  )
}

export default ThemedTextInput
