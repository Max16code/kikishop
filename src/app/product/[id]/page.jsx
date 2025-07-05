'use client'

import React from 'react'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { CartProvider, useCart } from '@/context/Cartcontext'  // Ensure useCart is exported
import { use } from 'react' // Needed to unwrap the promise

const productData = {
  hot1: {
    name: 'Floral Ankara Dress',
    price: 15009,
    sizes: ['6', '8', '10', '12', '14'],
    image: '/images/hot1.avif',
    description: 'Beautiful floral Ankara dress for all occasions.',
  },
  hot2: {
    name: 'Casual Striped Gown',
    price: 12508,
    sizes: ['8', '10', '12'],
    image: '/images/hot2.avif',
    description: 'Comfortable striped gown perfect for casual outings.',
  },
  // ... hot3 - hot9 (you already have this part)
}

export default function Page(props) {
  const params = use(props.params); // ✅ Unwrap the promise
  const { id } = params;
  const product = productData[id];
  const { addToCart } = useCart(); // ✅ Ensure this is available via context

  if (!product) return notFound();

  return (
    <div>
      <Navbar />

      <div className='flex'>
        <div className="px-6 pt-6">
          <h1 className="text-3xl font-extrabold text-yellow-400">BLAZERS</h1>
        </div>

        <div className="p-6 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-2xl object-cover shadow"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-xl text-green-700 font-semibold">
                ₦{product.price.toLocaleString()}
              </p>
              <div>
                <p className="font-medium">Available Sizes:</p>
                <ul className="flex gap-2 flex-wrap text-black">
                  {product.sizes.map((size, i) => (
                    <li key={i} className="px-3 py-1 bg-gray-200 rounded-full">
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-600">{product.description}</p>

              <button
                onClick={() => addToCart({ id, ...product })}
                className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
