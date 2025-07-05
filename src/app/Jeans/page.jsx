import React from 'react'
import Navbar from '@/components/Navbar'

export default function page() {
  return (
    <div>
      <Navbar />

     <div className="px-6 py-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Box 1 */}
          <div className="rounded-2xl overflow-hidden h-80">
            <div className="group rounded-2xl overflow-hidden h-80 animate-slide">
              <img
                src="/images/hot1.avif"
                alt="Product 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Box 2 */}
          <div className="rounded-2xl overflow-hidden h-80">
            <img
              src="/images/hot2.avif"
              alt="Product 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Box 3 */}
          <div className="rounded-2xl overflow-hidden h-80">
            <img
              src="/images/hot3.avif"
              alt="Product 3"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Box 4 */}
          <div className="rounded-2xl overflow-hidden h-80">
            <img
              src="/images/hot4.avif"
              alt="Product 4"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Box 5 */}
          <div className="rounded-2xl overflow-hidden h-80">
            <img
              src="/images/hot5.avif"
              alt="Product 5"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Box 6 */}
          <div className="rounded-2xl overflow-hidden h-80">
            <img
              src="/images/hot6.avif"
              alt="Product 6"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Box 7 */}
          <div className="rounded-2xl overflow-hidden h-40">
            <img
              src="/images/hot7.avif"
              alt="Product 7"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Box 8 */}
          <div className="rounded-2xl overflow-hidden h-40">
            <img
              src="/images/hot8.avif"
              alt="Product 8"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Box 9 */}
          <div className="rounded-2xl overflow-hidden h-40">
            <img
              src="/images/hot9.avif"
              alt="Product 9"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

    </div>
  )
}
