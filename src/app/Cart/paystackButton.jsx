'use client';

import { useEffect } from 'react';

export default function PaystackButton({ amount }) {
  const publicKey = 'pk_test_your_public_key'; // Replace with your Paystack public key
  const email = 'customer@example.com'; // Replace dynamically if needed

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const payWithPaystack = () => {
    const handler = window.PaystackPop.setup({
      key: publicKey,
      email,
      amount: amount * 100,
      currency: 'NGN',
      ref: '' + Math.floor(Math.random() * 1000000000 + 1),
      callback: function (response) {
        alert('Payment complete! Reference: ' + response.reference);
        // optionally: send to your backend for verification
      },
      onClose: function () {
        alert('Transaction was not completed, window closed.');
      },
    });
    handler.openIframe();
  };

  return (
    <button
      onClick={payWithPaystack}
      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
    >
      Pay Now
    </button>
  );
}
