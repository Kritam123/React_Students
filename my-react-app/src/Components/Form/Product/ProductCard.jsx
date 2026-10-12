import React from 'react'
import { Link } from 'react-router-dom'
const ProductCard = ({product}) => {

  return (
    <Link to={`/product/${product.id}`} key={product.id} className='border p-4'>
            <h2 className='text-lg font-bold'>{product.title}</h2>
            <p className='text-gray-600'>{product.description}</p>
            <p className='text-gray-800 font-semibold'>Price: ${product.price}</p>
        </Link>
  )
}

export default ProductCard