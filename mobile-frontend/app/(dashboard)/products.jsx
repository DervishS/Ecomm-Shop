import { StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native'
import { useState, useEffect } from 'react'
import API from '../../src/services/api'

// Themed components
import ThemedView from '../../components/ThemedView'
import ThemedLogo from '../../components/ThemedLogo'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'

const BASE_URL = 'https://mallory-dimetric-jerrold.ngrok-free.dev';

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
        <Spacer />
        <FlatList 
            data={products} 
            keyExtractor={(item) => item._id}
            numColumns={2}
            contentContainerStyle={{ padding: 10 }}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => (
            <ThemedView style={styles.card}>
                <Image source={{ uri: `${BASE_URL}/uploads/${item.image.replace('/images/', '')}` }} style={[styles.image, { resizeMode: 'contain' }]} />
                <ThemedText style={[styles.name, { flex: 1 }]}>{item.name}</ThemedText>
                <ThemedText style={styles.price}>${item.price.toFixed(2)}</ThemedText>
                <Spacer height={10} />
                <ThemedButton title="View Details" onPress={() => { /* Navigate to product details */ }}><ThemedText style={{ textAlign: 'center' }}>Details</ThemedText></ThemedButton>
            </ThemedView>
        )} />   
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
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        marginBottom: 10,
        borderRadius: 12,
    },
    card: {
        width: '48%',
        borderRadius: 8,
        marginBottom: 15,
        padding: 10,
    },
    name: {
        fontSize: 14,
        fontWeight: '500',
    },
    price: {
        fontSize: 13,
        fontWeight: '500',
    }, 
})