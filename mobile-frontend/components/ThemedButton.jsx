import { Pressable, StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedButton = ({ style, ...props}) => {
  return (
        <Pressable
            style={({pressed}) => [styles.btn, pressed && styles.pressed, 
            style]}
            {...props}
        />
  )
}

const styles = StyleSheet.create({
    btn: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  pressed: {
    opacity: 0.5,
  },
})

export default ThemedButton