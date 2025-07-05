'use client';

import { useCart } from '@/context/Cartcontext';
import Image from 'next/image';
import PaystackButton from './paystackButton'; // We'll build this next

export default function Page() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-yellow-500">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 border rounded-lg shadow-sm">
              <Image
                src={item.image}
                width={100}
                height={100}
                alt={item.name}
                className="rounded-xl object-cover"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">Size: {item.sizes?.[0]}</p>
                <p className="text-green-700 font-medium">₦{item.price.toLocaleString()}</p>
              </div>
            </div>
          ))}

          <div className="text-right mt-8">
            <p className="text-xl font-bold">Total: ₦{totalPrice.toLocaleString()}</p>

            {/* Paystack Button */}
            <PaystackButton amount={totalPrice} />
          </div>
        </div>
      )}
    </div>
  );
}
