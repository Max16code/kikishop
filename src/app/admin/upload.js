import connectToDatabase from '@/lib/mongodb';
import Product from '@/models/Product';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    await connectToDatabase();
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, message: 'Product uploaded', product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
