import React, { useEffect } from 'react'
import { useParams } from 'react-router';
const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = React.useState({});
    const [error, setError] = React.useState(null);
    const fetchProductDetail = async () => {
        try{
            const response = await fetch(`https://dummyjson.com/products/${productId}`);
            const data = await response.json();
            setProduct(data);
        }catch(error){
            setError(error);    
        }
    }
    useEffect(()=>{
        fetchProductDetail();
    }, [productId])
  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      {product && (
        <>
        <img src={product.thumbnail} alt={product.title} className='w-64 h-64 object-cover'/>
          <h1 className='text-2xl font-bold'>{product.title}</h1>
          <p className='text-gray-600'>{product.description}</p>
          <p className='text-gray-800 font-semibold'>Price: ${product.price}</p>
          <p className='text-gray-800 font-semibold'>Brand: {product.brand}</p>
        </>
      )}
    </div>
  )
}

export default ProductDetail