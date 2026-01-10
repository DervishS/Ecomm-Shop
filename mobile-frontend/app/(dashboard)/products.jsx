import { StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react'
import API from '../../src/services/api'

// Themed components
import ThemedView from '../../components/ThemedView'
import ThemedLogo from '../../components/ThemedLogo'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'

const products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await API.get('/products')
                setProducts(res.data.products)
                setLoading(false)
            } catch (err) {
                setError(err)
                setLoading(false)
            }
        }
        fetchProducts()
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" style={{ margin: 20 }} />
    }

    if (error) {
        return <ThemedText>Error: {error.message}</ThemedText>
    }

  return (
    <ThemedView style={styles.container} safe={true}>
        <ThemedLogo style={styles.logo}/>
        <FlatList data={products} keyExtractor={(item) => item._id} renderItem={({ item }) => (
            <ThemedView style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', width: '100%' }}>
                <ThemedText style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</ThemedText>
                <ThemedText style={{ fontSize: 16 }}>${item.price.toFixed(2)}</ThemedText>
                <Spacer height={5} />
                <ThemedButton title="View Details" onPress={() => { /* Navigate to product details */ }} />
            </ThemedView>
        )} />
        <Spacer />
    </ThemedView>
  )
}

export default products

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        top: 20,
        left: 20,
        width: 100,
        height: 100,
    }
})