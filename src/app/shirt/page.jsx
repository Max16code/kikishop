import connectToDatabase from '@/lib/mongodb';
import Product from '@/models/Product';

export const dynamic = 'force-dynamic'; // ensures fresh data every time

export default async function shirtPage() {
  await connectToDatabase();
  const jeans = await Product.find({ category: 'shirt' }).lean();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Shirt</h1>
      <div className="grid grid-cols-2 gap-4">
        {jeans.map((item) => (
          <div key={item._id} className="border p-2">
            <img src={item.image} className="h-40 w-full object-cover" />
            <h2>{item.title}</h2>
            <p>₦{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
