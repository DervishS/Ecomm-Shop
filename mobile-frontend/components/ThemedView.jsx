import { View, useColorScheme } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../constants/Colors'

const ThemedView = ({ style, safe = false, children, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors.mode[colorScheme] ?? Colors.mode.light

  if (!safe) return (
    <View style={[{ 
        backgroundColor: theme.background 
        }, style]}
        {...props}
    >
        {children}
    </View>
  )

  const insets = useSafeAreaInsets();

  return (
    <View style={[{ 
      backgroundColor: theme.background,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
      }, 
      style
      ]}
      {...props}
    >
        {children}
    </View>
  )
}

export default ThemedView