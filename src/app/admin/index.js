'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [formData, setFormData] = useState({
    title: '', description: '', price: '', category: '', size: '', image: ''
  });

  const handleAuth = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthorized(true);
    } else {
      alert('Unauthorized!');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/admin/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    alert(data.message);
  };

  if (!isAuthorized) {
    return (
      <div className="p-4">
        <input placeholder="Enter admin password" type="password"
               value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleAuth}>Login</button>
      </div>
    );
  }

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={e => setFormData({...formData, title: e.target.value})} />
      <textarea placeholder="Description" onChange={e => setFormData({...formData, description: e.target.value})} />
      <input type="number" placeholder="Price (₦)" onChange={e => setFormData({...formData, price: e.target.value})} />
      <input placeholder="Sizes (comma-separated)" onChange={e => setFormData({...formData, size: e.target.value.split(',')})} />
      <input placeholder="Image URL" onChange={e => setFormData({...formData, image: e.target.value})} />
      <select onChange={e => setFormData({...formData, category: e.target.value})}>
        <option value="">Select Category</option>
        <option value="blazers">Blazers</option>
        <option value="shirts">Shirts</option>
        <option value="skirts">Skirts</option>
        <option value="jeans">Jeans</option>
        <option value="gym">Gym</option>
        <option value="dresses">Dresses</option>
      </select>
      <button type="submit">Upload Product</button>
    </form>
  );
}
