import { Card, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Rating  from './Rating'

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top" />
        </Link>

        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as="div" className='product-title'>
                    <strong>{ product.name }</strong>
                </Card.Title>
            </Link>

            <Card.Text as='div'>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </Card.Text>

            <Card.Text as="h3">
                ${product.price}
            </Card.Text>
            <Card.Text className={product.countInStock > 0 ? 'text-success' : 'text-danger'} style={{ fontWeight: 'bold'}}>
                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product