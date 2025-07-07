// // models/Product.js
// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   price: Number,
//   image: String,
//   size: [String], // e.g. ['S', 'M', 'L']
//   category: {
//     type: String,
//     enum: ['blazers', 'shirts', 'skirts', 'jeans', 'gym', 'dresses'],
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// export default mongoose.models.Product || mongoose.model('Product', productSchema);
// /models/Product.js
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  size: [String],
  category: String,
  imageUrl: String, // or image
});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
