// import connectToDatabase from '@/lib/mongodb';
// import Product from '@/models/Product';

// export const dynamic = 'force-dynamic'; // ensures fresh data every time

// export default async function dressPage() {
//   await connectToDatabase();
//   const dress = await Product.find({ category: 'dress' }).lean();

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Dresses</h1>
//       <div className="grid grid-cols-2 gap-4">
//         {jeans.map((item) => (
//           <div key={item._id} className="border p-2">
//             <img src={item.image} className="h-40 w-full object-cover" />
//             <h2>{item.title}</h2>
//             <p>₦{item.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// 
import connectToDatabase from '@/lib/mongodb';
import Product from '@/models/Product';

export const dynamic = 'force-dynamic'; // Ensures fresh data on every load

export default async function dressPage() {
  await connectToDatabase();

  // Consistently use lowercase 'jeans' for category matching
  const dress = await Product.find({ category: 'dress' }).lean();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">dress</h1>

      {dress.length === 0 ? (
        <p className="text-gray-500">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {dress.map((item) => (
            <div key={item._id} className="border p-2 rounded-xl shadow-sm">
              <img
                src={item.imageUrl || item.image}
                alt={item.title}
                className="h-40 w-full object-cover rounded-md mb-2"
              />
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-green-700 font-medium">₦{item.price}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
