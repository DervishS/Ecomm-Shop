import { Tabs } from 'expo-router'
import { useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

export default function DashboardLayout() {
    const colorScheme = useColorScheme()
    const theme = Colors.mode[colorScheme] ?? Colors.mode.light
    return (
        <>
            <Tabs 
                screenOptions={{ headerShown: false, tabBarStyle: {
                    backgroundColor: theme.navBackground,
                    paddingTop: 10,
                    height: 90,
                },
                tabBarActiveTintColor: theme.iconColorFocused,
                tabBarInactiveTintColor: theme.iconColor
            }}
            >
                <Tabs.Screen 
                    name="search" 
                    options={{ tabBarLabel: 'Search', tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? "search" : "search-outline"} 
                            size={24} 
                            color={focused ? theme.iconColorFocused: theme.iconColor}
                        />
                    ) }}
                />
                <Tabs.Screen 
                    name="cart" 
                    options={{ tabBarLabel: 'Cart', tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? "cart" : "cart-outline"} 
                            size={24} 
                            color={focused ? theme.iconColorFocused : theme.iconColor} 
                        />
                    ) }} 
                />
                <Tabs.Screen 
                    name="profile" 
                    options={{ title: 'Profile', tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? "person" : "person-outline"} 
                            size={24} 
                            color={focused ? theme.iconColorFocused : theme.iconColor} 
                        />
                    ) }} 
                />
            </Tabs>
        </>
    )
}