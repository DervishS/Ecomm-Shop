import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'
import Loader from './Loader';

// fix: destructure props and use skip to avoid querying with an object
const RecentlyViewedItem = ({ productId }) => {
  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId, { skip: !productId });
  
  if (!productId) return null;
  if (isLoading) return <Loader />;
  if (error || !product) return null;

  return (
    <Card style={{ width: '12rem', margin: '1rem'}} className='d-inline-block'>
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} alt={product.name} />
      </Link>

      <Card.Body className='p-2'>
        <Card.Title as="div" style={{fontSize: '0.8rem'}}>
          {product.name.length > 40 ? `${product.name.slice(0, 37)}...` : product.name}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default RecentlyViewedItem;