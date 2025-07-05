import connectDB from '@/utils/db';
import Product from '@/models/product';

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find().limit(5); // sample check
    return Response.json({ success: true, count: products.length, products });
  } catch (error) {
    console.error('DB Error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
    
  }
}
