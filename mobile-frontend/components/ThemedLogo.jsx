import { Image, useColorScheme } from 'react-native'

import LightLogo from '../assets/img/ps-light.png'
import DarkLogo from '../assets/img/ps-dark.png'

const ThemedLogo = ({ ...props }) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === "dark" ? DarkLogo : LightLogo
  return (
    <Image source={logo} {...props} />
  )
}

export default ThemedLogo