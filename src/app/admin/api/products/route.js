import Product from '@/models/Product';
import connectDB from '@/utils/db';

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return Response.json(products);
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const product = await Product.create(body);
  return Response.json(product);
}
