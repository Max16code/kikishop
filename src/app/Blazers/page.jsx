import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const products = [
  { id: 'hot1', img: '/images/hot1.avif', alt: 'Product 1' },
  { id: 'hot2', img: '/images/hot2.avif', alt: 'Product 2' },
  { id: 'hot3', img: '/images/hot3.avif', alt: 'Product 3' },
  { id: 'hot4', img: '/images/hot4.avif', alt: 'Product 4' },
  { id: 'hot5', img: '/images/hot5.avif', alt: 'Product 5' },
  { id: 'hot6', img: '/images/hot6.avif', alt: 'Product 6' },
  { id: 'hot7', img: '/images/hot7.avif', alt: 'Product 7' },
  { id: 'hot8', img: '/images/hot8.avif', alt: 'Product 8' },
  { id: 'hot9', img: '/images/hot9.avif', alt: 'Product 9' },
];

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="px-6 py-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <Link key={index} href={`/product/${product.id}`}>
              <div className={`rounded-2xl overflow-hidden ${index < 6 ? 'h-80' : 'h-40'} cursor-pointer`}>
                <img
                  src={product.img}
                  alt={product.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
