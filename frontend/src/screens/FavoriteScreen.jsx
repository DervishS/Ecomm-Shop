import { useGetFavoritesQuery, useRemoveFavoriteMutation } from '../slices/usersApiSlice';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';

const FavoriteScreen = () => {
  const { data: favorites, isLoading, error } = useGetFavoritesQuery();
  const [removeFavorite] = useRemoveFavoriteMutation();

  const removeFavoriteHandler = async (itemId) => {
    try {
      await removeFavorite({ itemId }).unwrap();
    } catch (err) {
      console.error('Failed to remove favorite: ', err);
    }
  }

  if (isLoading) return <Loader />;
  if (error)
    return (
      <Message variant='danger'>
        {error?.data?.message || error?.error || error?.message || error.toString()}
      </Message>
    );

  return (
    <>
      <h1>My favorites</h1>

      {favorites && favorites.length > 0 ? (
        <Row>
          {favorites.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded'>
                <Link to={`/product/${product._id}`}>
                  <Card.Img src={product.image} variant='top' alt={product.name} />
                </Link>
                <Button variant='outline-danger' 
                        size='sm' 
                        className='position-absolute top-0 end-0 m-2'
                        onClick={() => removeFavoriteHandler(product._id)}>
                        ❌
                </Button>
                <Card.Body>
                  <Card.Title as='div'>
                    <strong>{product.name}</strong>
                  </Card.Title>
                  <Card.Text as='div'>${product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Message>No favorites yet.</Message>
      )}
    </>
  );
};

export default FavoriteScreen;