'use client';

import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    sizes: '',
    category: '',
  });

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      ...form,
      sizes: form.sizes.split(',').map(s => s.trim())
    };
    await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify(body),
    });
    fetchProducts(); // refresh
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-yellow-500">Admin Panel</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Product name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="border px-3 py-2 w-full" />
        <input type="text" placeholder="Description" value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} className="border px-3 py-2 w-full" />
        <input type="number" placeholder="Price" value={form.price} onChange={(e) => setForm({...form, price: e.target.value})} className="border px-3 py-2 w-full" />
        <input type="text" placeholder="Sizes (e.g. 6, 8, 10)" value={form.sizes} onChange={(e) => setForm({...form, sizes: e.target.value})} className="border px-3 py-2 w-full" />
        <input type="text" placeholder="Category (e.g. Blazers)" value={form.category} onChange={(e) => setForm({...form, category: e.target.value})} className="border px-3 py-2 w-full" />
        <input type="text" placeholder="Image URL or /images/pic.jpg" value={form.image} onChange={(e) => setForm({...form, image: e.target.value})} className="border px-3 py-2 w-full" />
        <button className="bg-black text-white px-4 py-2">Add Product</button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Existing Products</h2>
        <ul className="space-y-2 mt-4">
          {products.map(prod => (
            <li key={prod._id} className="border p-2 rounded flex justify-between">
              <span>{prod.name} - ₦{prod.price}</span>
              {/* future: add delete/edit buttons */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
