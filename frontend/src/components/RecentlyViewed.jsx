import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { getRecentlyViewed, clearRecentlyViewed } from '../utils/recentlyViewed'
import RecentlyViewedItem from './RecentlyViewedItem';

const RecentlyViewed = ({ max = 4}) => {
    const [ids, setIds] = useState([]);

    useEffect( () => {
        setIds(getRecentlyViewed().slice(0, max));
    }, [max]);

    const handleClear = () => {
        clearRecentlyViewed();
        setIds([]);
    }

    if (!ids || ids.length === 0) return null;

  return (
    <>
        <div className='d-flex justify-content-between align-items-center mb-2'>
            <h5 className='mb-0'>Recently Viewed</h5>
            <Button class="btn btn-light" size="sm" onClick={handleClear}>Clear</Button>
        </div>
        <div className='d-flex flex-wrap'>
            {ids.map((id) => (
                <RecentlyViewedItem key={id} productId={id} />
            ))}
        </div>
    </>
  );
};

export default RecentlyViewed